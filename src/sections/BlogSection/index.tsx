import { BlogPostCard } from "@/sections/BlogSection/components/BlogPostCard";

export const BlogSection = () => {
  return (
    <section className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] mb-[75.6485px] md:text-[15.667px] md:leading-[25.0672px] md:mb-[78.3351px]">
      <div className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] text-left w-full z-[5] ml-0 mr-auto mt-10 pt-[60px] pb-5 px-[25px] md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px] md:ml-auto">
        <div className="text-[15.1297px] box-border caret-transparent gap-x-[60.5188px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] leading-[24.2075px] gap-y-0 md:text-[15.667px] md:gap-x-[62.6681px] md:grid-cols-[1fr_2fr] md:leading-[25.0672px] md:gap-y-[31.334px]">
          <div className="text-[15.1297px] items-start bg-[url('https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba7379a_Wormhole.webp')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start leading-[24.2075px] bg-center pt-[22.6946px] pb-[30.2594px] px-[22.6946px] md:text-[15.667px] md:leading-[25.0672px] md:p-[47.0011px]">
            <h2 className="text-white text-[37.8243px] font-semibold box-border caret-transparent leading-[48.631px] uppercase my-[18.9121px] md:text-[47.0011px] md:leading-[60.4297px] md:my-[19.5838px]">
              Apprendre la blockchain
            </h2>
            <a
              href="#blog"
              className="relative text-white text-[18.9121px] font-semibold items-center bg-blue-700 box-border caret-transparent gap-x-[13.2385px] flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center leading-[24.5858px] max-w-[300px] order-last gap-y-[13.2385px] px-[15.1297px] py-[7.56485px] rounded-[3.78243px] md:text-[19.5838px] md:gap-x-[13.7086px] md:leading-[25.4589px] md:gap-y-[13.7086px] md:px-[15.667px] md:py-[7.83351px] md:rounded-[3.91675px] hover:bg-fuchsia-500"
            >
              <div className="text-[18.9121px] box-border caret-transparent leading-[24.5858px] md:text-[19.5838px] md:leading-[25.4589px]">
                Tous les articles
              </div>
              <div className="text-[18.9121px] items-center box-border caret-transparent flex justify-start leading-[24.5858px] w-[8.32134px] md:text-[19.5838px] md:leading-[25.4589px] md:w-[8.61686px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[18.9121px] before:not-italic before:normal-nums before:font-semibold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[24.5858px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-space_grotesk before:md:text-[19.5838px] before:md:leading-[25.4589px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[18.9121px] after:not-italic after:normal-nums after:font-semibold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[24.5858px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-space_grotesk after:md:text-[19.5838px] after:md:leading-[25.4589px]">
                <img
                  src="https://c.animaapp.com/mhjqsyis9DbJQx/assets/icon-1.svg"
                  alt="Icon"
                  className="text-[18.9121px] box-border caret-transparent h-full leading-[24.5858px] w-full md:text-[19.5838px] md:leading-[25.4589px]"
                />
              </div>
            </a>
          </div>
          <div className="text-[15.1297px] box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]">
            <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]">
              <div
                role="list"
                className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] border-t-white/20 border-b-white/70 border-x-white/70 border-t md:text-[15.667px] md:leading-[25.0672px]"
              >
                <div
                  role="listitem"
                  className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]"
                >
                  <BlogPostCard
                    href="#blog-list-of-our-public-audits"
                    title="Liste de nos audits publics"
                    authorImageSrc="https://cdn.prod.website-files.com/6621233fd44f04553ba73647/6621233fd44f04553ba7365c_avatar_user_11_1659019807-70x70.png"
                    authorImageAlt=""
                    authorName="Andrea Nováková"
                    categories="AUDITS, ETHEREUM"
                    date="25 novembre 2022"
                  />
                </div>
                <div
                  role="listitem"
                  className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]"
                >
                  <BlogPostCard
                    href="#blog-how-to-prepare-for-a-smart-contract-audit"
                    title="Comment se préparer pour un audit de smart contract"
                    authorImageSrc="https://cdn.prod.website-files.com/6621233fd44f04553ba73647/6621233fd44f04553ba7365b_jan_ackbch_discord-70x70.png"
                    authorImageAlt=""
                    authorName="Jan Kalivoda"
                    categories="AUDITS, ÉDUCATION, ETHEREUM"
                    date="17 mars 2023"
                  />
                </div>
                <div
                  role="listitem"
                  className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]"
                >
                  <BlogPostCard
                    href="#blog-how-to-develop-secure-cross-chain-apps-on-axelar"
                    title="Comment développer des applications cross-chain sécurisées sur Axelar"
                    authorImageSrc="/placeholder.png"
                    authorImageAlt=""
                    authorImageVariant="hidden"
                    authorName="Stepan Sonsky"
                    categories="ÉDUCATION, SOLIDITY, TUTORIEL"
                    date="5 avril 2023"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
