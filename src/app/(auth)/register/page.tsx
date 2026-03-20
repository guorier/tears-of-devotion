"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { format, isValid, parse } from "date-fns";
import {
  CalendarDays,
  ChevronRight,
  KeyRound,
  LoaderCircle,
  Mail,
  MapPinHouse,
  MapPinned,
  Phone,
  Search,
  UserRound,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

type RegisterForm = {
  username: string;
  password: string;
  name: string;
  birthDate: string;
  phone: string;
  zonecode: string;
  address: string;
  detailAddress: string;
  extraAddress: string;
  churchJoinDate: string;
};

type KakaoPostcodeData = {
  zonecode: string;
  roadAddress: string;
  jibunAddress: string;
  userSelectedType: "R" | "J";
  bname: string;
  buildingName: string;
  apartment: "Y" | "N";
};

type KakaoPostcodeInstance = {
  embed: (element: HTMLElement) => void;
};

type KakaoPostcodeConstructor = new (options: {
  oncomplete: (data: KakaoPostcodeData) => void;
  width?: string;
  height?: string;
  maxSuggestItems?: number;
}) => KakaoPostcodeInstance;

declare global {
  interface Window {
    daum?: {
      Postcode: KakaoPostcodeConstructor;
    };
  }
}

const INITIAL_FORM: RegisterForm = {
  username: "",
  password: "",
  name: "",
  birthDate: "",
  phone: "",
  zonecode: "",
  address: "",
  detailAddress: "",
  extraAddress: "",
  churchJoinDate: "",
};

function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length < 4) {
    return digits;
  }

  if (digits.length < 8) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }

  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

function formatDateValue(date: Date | undefined) {
  return date ? format(date, "yyyy-MM-dd") : "";
}

function parseDateValue(value: string) {
  const parsedDate = parse(value, "yyyy-MM-dd", new Date());
  return isValid(parsedDate) ? parsedDate : undefined;
}

function combineAddress(form: RegisterForm) {
  return [form.zonecode && `(${form.zonecode})`, form.address, form.detailAddress, form.extraAddress]
    .filter(Boolean)
    .join(" ")
    .trim();
}

function FormField({
  label,
  icon,
  hint,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          {icon}
        </span>
        {label}
      </span>
      {children}
      {hint ? <p className="mt-2 text-xs leading-5 text-slate-500">{hint}</p> : null}
    </label>
  );
}

function DateField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const selectedDate = parseDateValue(value);
  const [month, setMonth] = useState<Date>(selectedDate ?? new Date());

  useEffect(() => {
    if (selectedDate) {
      setMonth(selectedDate);
    }
  }, [selectedDate]);

  return (
    <FormField label={label} icon={<CalendarDays className="h-4 w-4" />}>
      <div className="flex items-center gap-2 rounded-[1.35rem] border border-slate-200 bg-white px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <input
          className="w-full border-0 bg-transparent p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
          value={value}
          placeholder={placeholder}
          onChange={(event) => {
            const nextValue = event.target.value;
            onChange(nextValue);

            const nextDate = parseDateValue(nextValue);
            if (nextDate) {
              setMonth(nextDate);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setOpen(true);
            }
          }}
          required
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              aria-label={`${label} 선택`}
            >
              <CalendarDays className="h-4 w-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="w-[min(22rem,calc(100vw-2.5rem))] rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-[0_25px_50px_rgba(15,23,42,0.16)]"
            align="center"
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={selectedDate}
              month={month}
              onMonthChange={(nextMonth) => setMonth(nextMonth)}
              onSelect={(date) => {
                onChange(formatDateValue(date));
                if (date) {
                  setMonth(date);
                }
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </FormField>
  );
}

export default function RegisterPage() {
  const router = useRouter();
  const addressSearchButtonRef = useRef<HTMLButtonElement>(null);
  const detailAddressRef = useRef<HTMLInputElement>(null);
  const postcodeLayerRef = useRef<HTMLDivElement>(null);
  const savedScrollYRef = useRef(0);

  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const [isPostcodeReady, setIsPostcodeReady] = useState(false);
  const [postcodeLoadFailed, setPostcodeLoadFailed] = useState(false);

  function openPostcodeModal() {
    savedScrollYRef.current = window.scrollY;
    window.scrollTo({ top: 0, behavior: "auto" });
    setIsPostcodeOpen(true);
  }

  function closePostcodeModal(focusTarget: "search" | "detail" = "search") {
    setIsPostcodeOpen(false);

    window.setTimeout(() => {
      if (focusTarget === "detail") {
        detailAddressRef.current?.focus();
        return;
      }

      addressSearchButtonRef.current?.focus();
    }, 80);
  }

  useEffect(() => {
    if (!isPostcodeOpen) {
      return;
    }

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyWidth = document.body.style.width;
    const previousBodyLeft = document.body.style.left;
    const previousBodyRight = document.body.style.right;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = "0";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.width = previousBodyWidth;
      document.body.style.left = previousBodyLeft;
      document.body.style.right = previousBodyRight;
      window.scrollTo({ top: savedScrollYRef.current, behavior: "auto" });
    };
  }, [isPostcodeOpen]);

  useEffect(() => {
    if (!isPostcodeOpen || !isPostcodeReady || !postcodeLayerRef.current || !window.daum?.Postcode) {
      return;
    }

    postcodeLayerRef.current.innerHTML = "";

    const postcode = new window.daum.Postcode({
      oncomplete: (data) => {
        let extraAddress = "";

        if (data.userSelectedType === "R") {
          if (data.bname && /(동|로|가)$/.test(data.bname)) {
            extraAddress = data.bname;
          }

          if (data.buildingName && data.apartment === "Y") {
            extraAddress = extraAddress
              ? `${extraAddress}, ${data.buildingName}`
              : data.buildingName;
          }

          if (extraAddress) {
            extraAddress = `(${extraAddress})`;
          }
        }

        const selectedAddress =
          data.userSelectedType === "R" ? data.roadAddress : data.jibunAddress;

        setForm((currentForm) => ({
          ...currentForm,
          zonecode: data.zonecode,
          address: selectedAddress,
          extraAddress,
        }));
        closePostcodeModal("detail");
      },
      width: "100%",
      height: "100%",
      maxSuggestItems: 6,
    });

    postcode.embed(postcodeLayerRef.current);
  }, [isPostcodeOpen, isPostcodeReady]);

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.address) {
      alert("주소 검색을 먼저 진행해주세요.");
      return;
    }

    setIsSubmitting(true);

    const fullAddress = combineAddress(form);

    const { error } = await supabase.auth.signUp({
      email: form.username.trim(),
      password: form.password,
      options: {
        data: {
          name: form.name.trim(),
          birthDate: form.birthDate,
          phone: form.phone,
          address: fullAddress,
          zonecode: form.zonecode,
          roadAddress: form.address,
          detailAddress: form.detailAddress.trim(),
          extraAddress: form.extraAddress,
          churchJoinDate: form.churchJoinDate,
        },
      },
    });

    setIsSubmitting(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("회원가입이 완료되었습니다. 이메일 인증 후 로그인해주세요.");
    router.push("/login");
  }

  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="afterInteractive"
        onLoad={() => setIsPostcodeReady(true)}
        onError={() => setPostcodeLoadFailed(true)}
      />

      <section className="relative overflow-hidden px-5 py-8">
        <div className="absolute left-[-4rem] top-8 h-36 w-36 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-3rem] h-40 w-40 rounded-full bg-sky-300/20 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-[0_25px_60px_rgba(15,23,42,0.1)] backdrop-blur">
          <div className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(145deg,#0f172a_0%,#1e3a8a_55%,#14b8a6_120%)] px-6 pb-7 pt-8 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_34%)]" />
            <div className="relative">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur">
                Join Community
              </div>
              <h1 className="mt-5 text-[1.9rem] font-semibold leading-tight tracking-[-0.04em]">
                함께 기도하고
                <br />
                함께 살아가는 여정
              </h1>
              <p className="mt-3 text-sm leading-6 text-white/80">
                기본 정보와 교회 정보를 입력하면 묵상과 공동체 기록을 이어서 사용할 수
                있습니다.
              </p>
            </div>
          </div>

          <form className="space-y-5 p-6" onSubmit={handleRegister}>
            <FormField
              label="아이디"
              icon={<Mail className="h-4 w-4" />}
              hint="현재 로그인 아이디는 이메일 형식으로 사용됩니다."
            >
              <div className="flex items-center gap-3 rounded-[1.35rem] border border-slate-200 bg-slate-50/80 px-4 py-3 shadow-inner shadow-slate-100">
                <Mail className="h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  className="w-full border-0 bg-transparent p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  placeholder="name@example.com"
                  value={form.username}
                  onChange={(event) =>
                    setForm((currentForm) => ({
                      ...currentForm,
                      username: event.target.value,
                    }))
                  }
                  required
                />
              </div>
            </FormField>

            <FormField label="비밀번호" icon={<KeyRound className="h-4 w-4" />}>
              <div className="flex items-center gap-3 rounded-[1.35rem] border border-slate-200 bg-slate-50/80 px-4 py-3 shadow-inner shadow-slate-100">
                <KeyRound className="h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  className="w-full border-0 bg-transparent p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  placeholder="비밀번호를 입력해주세요"
                  value={form.password}
                  onChange={(event) =>
                    setForm((currentForm) => ({
                      ...currentForm,
                      password: event.target.value,
                    }))
                  }
                  required
                />
              </div>
            </FormField>

            <FormField label="이름" icon={<UserRound className="h-4 w-4" />}>
              <div className="flex items-center gap-3 rounded-[1.35rem] border border-slate-200 bg-slate-50/80 px-4 py-3 shadow-inner shadow-slate-100">
                <UserRound className="h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  className="w-full border-0 bg-transparent p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  placeholder="이름을 입력해주세요"
                  value={form.name}
                  onChange={(event) =>
                    setForm((currentForm) => ({
                      ...currentForm,
                      name: event.target.value,
                    }))
                  }
                  required
                />
              </div>
            </FormField>

            <DateField
              label="생일"
              value={form.birthDate}
              onChange={(birthDate) =>
                setForm((currentForm) => ({
                  ...currentForm,
                  birthDate,
                }))
              }
              placeholder="YYYY-MM-DD"
            />

            <FormField
              label="핸드폰번호"
              icon={<Phone className="h-4 w-4" />}
              hint="입력하면 자동으로 하이픈이 들어갑니다."
            >
              <div className="flex items-center gap-3 rounded-[1.35rem] border border-slate-200 bg-slate-50/80 px-4 py-3 shadow-inner shadow-slate-100">
                <Phone className="h-4 w-4 text-slate-400" />
                <input
                  type="tel"
                  inputMode="numeric"
                  className="w-full border-0 bg-transparent p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  placeholder="010-1234-5678"
                  value={form.phone}
                  onChange={(event) =>
                    setForm((currentForm) => ({
                      ...currentForm,
                      phone: formatPhoneNumber(event.target.value),
                    }))
                  }
                  required
                />
              </div>
            </FormField>

            <FormField
              label="주소"
              icon={<MapPinned className="h-4 w-4" />}
              hint="주소검색으로 우편번호와 기본주소를 채운 뒤 상세주소를 입력해주세요."
            >
              <div className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                    placeholder="우편번호"
                    value={form.zonecode}
                    readOnly
                    required
                  />
                  <button
                    ref={addressSearchButtonRef}
                    type="button"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[1rem] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_100%)] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5"
                    onClick={openPostcodeModal}
                  >
                    <Search className="h-4 w-4" />
                    주소 검색
                  </button>
                </div>

                <input
                  type="text"
                  className="w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  placeholder="검색으로 선택한 기본주소"
                  value={form.address}
                  readOnly
                  required
                />

                <input
                  ref={detailAddressRef}
                  type="text"
                  className="w-full rounded-[1rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none focus:ring-0"
                  placeholder="상세주소를 입력해주세요"
                  value={form.detailAddress}
                  onChange={(event) =>
                    setForm((currentForm) => ({
                      ...currentForm,
                      detailAddress: event.target.value,
                    }))
                  }
                />

                {form.extraAddress ? (
                  <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800">
                    참고항목 {form.extraAddress}
                  </div>
                ) : null}
              </div>
            </FormField>

            <DateField
              label="교회원 날짜"
              value={form.churchJoinDate}
              onChange={(churchJoinDate) =>
                setForm((currentForm) => ({
                  ...currentForm,
                  churchJoinDate,
                }))
              }
              placeholder="YYYY-MM-DD"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "mt-2 flex w-full items-center justify-center gap-2 rounded-[1.4rem] px-4 py-4 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(37,99,235,0.28)] transition",
                isSubmitting
                  ? "cursor-not-allowed bg-slate-400"
                  : "bg-[linear-gradient(135deg,#16a34a_0%,#2563eb_100%)] hover:-translate-y-0.5"
              )}
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  가입 중입니다
                </>
              ) : (
                <>
                  회원가입 완료
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </button>

            <div className="rounded-[1.5rem] bg-slate-50 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Already Joined
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                이미 계정이 있다면 로그인해서 바로 묵상 기록과 공동체 기능을 이어서
                사용할 수 있습니다.
              </p>
              <Link
                href="/login"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
              >
                로그인으로 이동
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </form>
        </div>

        {isPostcodeOpen ? (
          <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/45 p-4 pt-5 backdrop-blur-sm sm:p-6 sm:pt-8">
            <div className="w-full max-w-[430px] max-h-[calc(100svh-1.5rem)] overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.28)] sm:max-h-[42rem]">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Address Search
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-slate-900">주소검색</h2>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-slate-500 hover:bg-slate-100"
                  onClick={() => closePostcodeModal()}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">주소 검색 닫기</span>
                </Button>
              </div>

              <div className="bg-slate-50 px-4 py-3">
                <div className="flex items-start gap-3 rounded-[1.1rem] bg-white px-4 py-2.5 text-sm text-slate-600 shadow-sm">
                  <MapPinHouse className="mt-0.5 h-4 w-4 text-sky-600" />
                  <p className="leading-5">
                    도로명 또는 지번으로 검색한 뒤 주소를 선택하면 기본주소가 바로
                    입력됩니다.
                  </p>
                </div>
              </div>

              <div className="h-[min(48svh,24rem)] min-h-[19rem] bg-white sm:h-[28rem]">
                {postcodeLoadFailed ? (
                  <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                    <p className="text-base font-semibold text-slate-900">
                      주소 검색 스크립트를 불러오지 못했습니다.
                    </p>
                    <p className="text-sm leading-6 text-slate-500">
                      잠시 후 다시 시도하거나 네트워크 상태를 확인해주세요.
                    </p>
                  </div>
                ) : isPostcodeReady ? (
                  <div ref={postcodeLayerRef} className="h-full w-full" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                    <LoaderCircle className="h-6 w-6 animate-spin text-sky-600" />
                    <p className="text-sm font-medium text-slate-600">
                      주소 검색 화면을 준비하고 있습니다.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
