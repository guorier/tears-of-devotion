import * as root from "@/examples/accordion";
import DocPage from "@/components/DocPage";

export default function AccordionDoc() {

  return (
    <>
      <div className='mx-auto max-w-7xl'>
        <h3 className='mt-8 mb-4'>아코디언</h3>
      </div>
      <DocPage root={root} />
    </>
  );
}