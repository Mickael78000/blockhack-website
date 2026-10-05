export type BlogPostCardProps = {
  href: string;
  title: string;
  authorImageSrc: string;
  authorImageAlt: string;
  authorImageVariant?: string;
  authorName: string;
  categories: string;
  date: string;
};

export const BlogPostCard = (props: BlogPostCardProps) => {
  return (
    <a
      href={props.href}
      className="text-[7.5649px] font-light box-border caret-transparent block leading-[12.1038px] max-w-full pt-[15.1297px] pb-[30.2594px] border-t-white/70 border-b-white/20 border-x-white/70 border-b md:text-[15.667px] md:leading-[25.0672px] md:pt-[62.6681px] md:pb-[35.2508px]"
    >
      <h3 className="text-white text-[15.1297px] font-medium box-border caret-transparent leading-[17.0209px] my-5 md:text-[31.334px] md:leading-[35.2508px]">
        {props.title}
      </h3>
      <div className="text-[7.5649px] items-start box-border caret-transparent flex flex-col justify-start leading-[12.1038px] gap-y-[15.1297px] md:text-[15.667px] md:items-center md:flex-row md:leading-[25.0672px] md:gap-y-[normal]">
        <div className="text-[6.6193px] font-medium items-center box-border caret-transparent gap-x-[15.1297px] flex leading-[10.5908px] md:text-[13.7086px] md:gap-x-[15.667px] md:leading-[21.9338px]">
          <div className="text-[6.6193px] box-border caret-transparent h-[26.477px] leading-[10.5908px] w-[26.477px] md:text-[13.7086px] md:h-[27.4173px] md:leading-[21.9338px] md:w-[27.4173px]">
            <img
              src={props.authorImageSrc}
              alt={props.authorImageAlt}
              className={`text-[6.6193px] box-border caret-transparent h-full leading-[10.5908px] max-w-full object-cover w-full md:text-[13.7086px] md:leading-[21.9338px] ${props.authorImageVariant || ""}`}
            />
          </div>
          <div className="text-[6.6193px] box-border caret-transparent leading-[10.5908px] md:text-[13.7086px] md:leading-[21.9338px]">
            {props.authorName}
          </div>
        </div>
        <div className="text-[7.5649px] items-start box-border caret-transparent gap-x-[9.45607px] flex flex-col justify-between leading-[12.1038px] gap-y-[15.1297px] w-full pl-0 md:text-[15.667px] md:items-center md:gap-x-[9.79189px] md:flex-row md:justify-normal md:leading-[25.0672px] md:gap-y-[normal] md:w-auto md:pl-[9.79189px]">
          <div className="text-white text-[5.6737px] font-bold box-border caret-transparent hidden tracking-[2.26946px] leading-[5.6737px] min-h-0 min-w-0 md:text-[11.7503px] md:block md:tracking-[2.35005px] md:leading-[11.7503px] md:min-h-[auto] md:min-w-[auto]">
            //
          </div>
          <div className="text-white text-[5.6737px] font-bold bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)_40%,rgb(0,0,255)_40%,rgb(0,0,255))] box-border caret-transparent tracking-[2.26946px] leading-[5.6737px] uppercase md:text-[11.7503px] md:tracking-[2.35005px] md:leading-[11.7503px]">
            {props.categories}
          </div>
          <div className="text-[5.6737px] font-bold box-border caret-transparent tracking-[2.04251px] leading-[5.6737px] uppercase pl-0 md:text-[11.7503px] md:tracking-[2.11505px] md:leading-[11.7503px] md:pl-[23.5005px]">
            {props.date}
          </div>
        </div>
        <div className="text-white text-[7.5649px] font-medium box-border caret-transparent leading-[12.1038px] mx-auto md:text-[15.667px] md:leading-[25.0672px] md:mr-0">
          Read
        </div>
      </div>
    </a>
  );
};
