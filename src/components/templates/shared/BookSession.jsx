import Input from '@modules/Input/Input';
import Textarea from '@modules/Textarea/Textarea';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';

export default function BookSession() {
  return (
    <div className="container">
      <div className="space-y-10">
        <p className="text-primary font-semibold">رزرو نوبت</p>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-20 xl:gap-32!">
          <div className="space-y-10 md:w-[40%] lg:w-1/2">
            <h2 className="font-secondary text-5xl leading-snug lg:text-7xl">
              هر مسیر، با <span className="text-primary"> یک قدم ساده </span> آغاز می‌شود.
            </h2>
            <p className="text-paragraph max-w-120 lg:max-w-none">
              فرقی نمی‌کند برای اولین بار به روان‌درمانی فکر می‌کنید، قصد دارید مسیر درمان خود را
              ادامه دهید یا فقط می‌خواهید با گزینه‌های پیش رویتان آشنا شوید؛ ما آماده‌ایم تا متناسب
              با نیازهای شما همراهتان باشیم. برای درخواست رزرو جلسه، کافی است فرم زیر را تکمیل کنید
              تا اولین قدم را با اطمینان بردارید.
            </p>
          </div>
          <form className="flex flex-col gap-16 md:w-[60%] lg:w-1/2">
            <div className="space-y-8">
              <h5 className="text-2xl">کمی از خودتان برای ما بنویسید.</h5>
              <Input placeholder="نام شما *" />
              <Input placeholder="ایمیل شما *" type="email" />
              <Input placeholder="تلفن همراه *" inputMode="tel" />
            </div>
            <div className="space-y-8">
              <h5 className="text-2xl">چه چیزی شما را به اینجا آورده؟</h5>
              <Textarea placeholder="لازم نیست همه چیز را بنویسید؛ فقط هر آنچه حس می‌کنید دانستنش برای ما مفید است، با ما در میان بگذارید." />
            </div>
            <PrimaryButton>رزرو نوبت</PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
}
