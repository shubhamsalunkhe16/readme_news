import React from "react";
import Layout from "../components/Layout";
import BannerNews from "../components/BannerNews";
import OverlayNewsList from "../components/OverlayNewsList";
import NewsCategoryList from "../components/NewsCategoryList";
import VerticalNewsList from "../components/VerticalNewsList";
import SectionHeader from "../components/SectionHeader";
import NewsCategoriesData from "../constants/NewsCategories";
import useTopHeadlineData from "../hooks/useFetchTopHeadlines";
import { NewsError, NewsNoData, NewsSkeleton } from "../components/Placeholder";
import HorizontalNewsList from "../components/HorizontalNewsList";

const HomePage = () => {
  const { data: topHeadlineData, isLoading, error } = useTopHeadlineData();

  let bannerNews = topHeadlineData?.articles?.[0];
  let overlayNewsList = topHeadlineData?.articles?.slice(8, 10);
  let latestNewsList = topHeadlineData?.articles?.slice(12, 16);
  let bannerNewsList = topHeadlineData?.articles?.slice(1, 4);
  let factCheckLeftNewsList = topHeadlineData?.articles?.slice(17, 20);
  let factCheckRightNewsList = topHeadlineData?.articles?.slice(26, 29);

  return (
    <Layout>
      {isLoading ? (
        <NewsSkeleton />
      ) : error ? (
        <NewsError error={error} />
      ) : !topHeadlineData?.articles ||
        topHeadlineData?.articles?.length === 0 ? (
        <NewsNoData />
      ) : (
        <>
          <section>
            <BannerNews bannerNews={bannerNews} newsList={bannerNewsList} />
            <hr className="divider" />
          </section>
          <section>
            <OverlayNewsList newsList={overlayNewsList} />
            <hr className="divider" />
          </section>
          <section>
            <SectionHeader>Latest News</SectionHeader>
            <VerticalNewsList newsList={latestNewsList} />
            <hr className="divider" />
          </section>
          <section>
            <SectionHeader>Fact check</SectionHeader>
            <div className="flex gap-0 flex-col sm:flex-row sm:gap-10">
              <div className="flex-1">
                <HorizontalNewsList newsList={factCheckLeftNewsList} />
              </div>
              <hr className="divider sm:hidden" />
              <div className="flex-1">
                <HorizontalNewsList newsList={factCheckRightNewsList} />
              </div>
            </div>
            <hr className="divider" />
          </section>
          <section>
            <SectionHeader>News Categories</SectionHeader>
            <NewsCategoryList NewsCategoriesData={NewsCategoriesData} />
            <hr className="divider" />
          </section>
          <section>
            <SectionHeader>Local News</SectionHeader>
            <div className="w-full">
              <HorizontalNewsList newsList={factCheckLeftNewsList} />
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default HomePage;
