import Image from 'next/image';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';

export default function Customers() {
  return (
    <div className="container md:pb-16">
      <div className="space-y-8">
        <p className="text-primary font-bold">آدم های واقعی. تغییر واقعی</p>
        <div className="flex flex-col gap-8 md:flex-row-reverse lg:items-center">
          <div className="relative flex shrink-0 justify-end md:w-1/2">
            <div className="absolute right-2 -bottom-16 hidden aspect-[.651338] w-1/2 md:block">
              <Image
                className="size-full object-cover"
                alt="Finding balance after burnout"
                width={2048}
                height={2048}
                src="/images/customers/customer-2.jpg"
              />
            </div>
            <div className="h-100 w-full md:aspect-[.651338] md:h-auto md:w-[60%]">
              <Image
                className="size-full object-cover"
                alt="Finding balance after burnout"
                width={2048}
                height={2048}
                src="/images/customers/customer-1.jpg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-12 md:w-1/2">
            <div className="flex flex-col gap-6 md:max-w-97.5 lg:max-w-140">
              <h2 className="font-secondary text-5xl lg:text-6xl">
                بازگشت به تعادل <br className="hidden lg:block" /> پس از فرسودگی
              </h2>
              <p className="text-paragraph leading-relaxed">
                پس از سال‌ها درگیر بودن با استرس مزمن و خستگی عاطفی، سارا در یکی از سخت‌ترین
                دوره‌های زندگی‌اش برای دریافت کمک مراجعه کرد. با برداشتن قدم‌های کوچک اما پیوسته،
                آرامش و ثبات را دوباره به زندگی خود بازگرداند و توانست بار دیگر با انگیزه و
                توانمندی‌هایش ارتباط برقرار کند.
              </p>
            </div>
            <PrimaryButton className="max-w-max">خواندن تجربه کامل</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
