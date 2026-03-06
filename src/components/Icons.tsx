"use client";
import { twMerge } from 'tailwind-merge'

const IconSource = [
  { name: "iconEyeOff", src: "/images/eye_off.svg" },
  { name: "iconEyeOn", src: "/images/eye_on.svg" },
  { name: "iconAccodian", src: "/images/icon_accodian.svg" },
  { name: "iconAccodianG", src: "/images/icon_accodian_g.svg" },
  { name: "iconAdd", src: "/images/icon_add.svg" },
  { name: "iconArrowclockwise", src: "/images/icon_arrowclockwise.svg" },
  { name: "iconBoardDelete", src: "/images/icon_board_delete.svg" },
  { name: "iconBoardEdit", src: "/images/icon_board_edit.svg" },
  { name: "iconChk", src: "/images/icon_chk.svg" },
  { name: "iconClose", src: "/images/icon_close.svg" },
  { name: "iconClose2", src: "/images/icon_close2.svg" },
  { name: "iconCompleted", src: "/images/icon_completed.svg" },
  { name: "iconDate", src: "/images/icon_date.svg" },
  { name: "iconDirection", src: "/images/icon_direction.svg" },
  { name: "iconDirectionDown", src: "/images/icon_direction_down.svg" },
  { name: "iconDirectionUp", src: "/images/icon_direction_up.svg" },
  { name: "iconDisabledChk", src: "/images/icon_disabled_chk.svg" },
  { name: "iconEmpty", src: "/images/icon_empty.svg" },
  { name: "iconEmpty2", src: "/images/icon_empty2.svg" },
  { name: "iconFail", src: "/images/icon_fail.svg" },
  { name: "iconFilesearch", src: "/images/icon_filesearch.svg" },
  { name: "iconFileuploed", src: "/images/icon_fileuploed.svg" },
  { name: "iconFolder", src: "/images/icon_folder.svg" },
  { name: "iconImg_Empty", src: "/images/icon_img_empty.svg" },
  { name: "iconImg", src: "/images/icon_img.svg" },
  { name: "iconImg2", src: "/images/icon_img2.svg" },
  { name: "iconImg3", src: "/images/icon_img3.svg" },
  { name: "iconInfo", src: "/images/icon_info.svg" },
  { name: "iconManintenance", src: "/images/icon_manintenance.svg" },
  { name: "iconMaximize", src: "/images/icon_maximize.svg" },
  { name: "iconMove", src: "/images/icon_move.svg" },
  { name: "iconNew", src: "/images/icon_new.svg" },
  { name: "iconNotFound", src: "/images/icon_not_found.svg" },
  { name: "iconNoticePin", src: "/images/icon_notice_pin.svg" },
  { name: "iconNoticePoint", src: "/images/icon_notice_point.svg" },
  { name: "iconPageLeft", src: "/images/icon_arrow_left.svg" },
  { name: "iconPageRight", src: "/images/icon_arrow_right.svg" },
  { name: "iconPaper", src: "/images/icon_paper.svg" },
  { name: "iconPoint", src: "/images/icon_point.svg" },
  { name: "iconPoint2", src: "/images/icon_point2.svg" },
  { name: "iconRestore", src: "/images/icon_restore.svg" },
  { name: "iconSave", src: "/images/icon_save.svg" },
  { name: "iconScreenshot", src: "/images/icon_screenshot.svg" },
  { name: "iconSelect", src: "/images/icon_select.svg" },
  { name: "iconSelectArr", src: "/images/icon_select_arr.svg" },
  { name: "iconDoubleLeft", src: "/images/icon_dp_left.svg" },
  { name: "iconDoubleRight", src: "/images/icon_dp_right.svg" },
  { name: "iconLeft", src: "/images/icon_p_left.svg" },
  { name: "iconRight", src: "/images/icon_p_right.svg" },
  { name: "iconSearch", src: "/images/icon_search.svg" },
  { name: "iconDelete", src: "/images/icon_delete.svg" },
  { name: "iconClouds", src: "/images/icon_clouds.svg" },
  { name: "iconPower", src: "/images/icon_power.svg" },
  { name: "FaPlusSquare", src: "/images/FaPlusSquare.svg" },
  { name: "FaMinusSquare", src: "/images/FaMinusSquare.svg" },
  { name: "IconCheckSpeech", src: "/images/icon_check_speech.svg" },
  { name: "IconCloseCircle", src: "/images/icon_close_circle.svg" },
  { name: "IconErr", src: "/images/icon_err.svg" },
];

export type iName = typeof IconSource[number]['name'];

interface IconProps {
  className?: string
  iName?: iName | string
  title?: string;
  original?: boolean
  onClick?: () => void
}

const Icons = ({ iName, original, className, title, onClick }: IconProps) => {
  const icon = IconSource.find(item => item.name === iName);

  const iconStyle = !original
    ? {
      WebkitMaskImage: `url(${icon?.src})`,
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      WebkitMaskPosition: 'center',
    } : {
      backgroundImage: `url(${icon?.src})`,
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }

  return <i
    className={twMerge(className)}
    style={iconStyle}
    title={title}
    onClick={() => onClick?.()}
  />
};

export default Icons
