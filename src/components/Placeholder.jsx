import SectionHeader from "./SectionHeader";

const NewsCardSkeleton = () => {
  return (
    <div role="status" className="animate-pulse w-full">
      <div className="flex items-center justify-center h-48 bg-text-secondary rounded ">
        <svg
          className="w-10 h-10 text-text-primary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="flex items-center mt-4">
        <svg
          className="w-10 h-10 me-3 text-text-secondary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div className="w-full">
          <div className="h-2.5 bg-text-secondary rounded-full mb-2"></div>
          <div className=" h-2 bg-text-secondary rounded-full "></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const NewsSkeleton = () => (
  <>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
      {new Array(4)?.fill(0)?.map(() => (
        <NewsCardSkeleton />
      ))}
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      {new Array(2)?.fill(0)?.map(() => (
        <div>
          <div className="w-full h-56 bg-text-secondary rounded-lg animate-pulse" />
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
      {new Array(4)?.fill(0)?.map(() => (
        <NewsCardSkeleton />
      ))}
    </div>
  </>
);

export const NewsError = ({ error }) => (
  <SectionHeader>Error loading data: {error?.message}</SectionHeader>
);

export const NewsNoData = () => (
  <SectionHeader>Sorry, no news available</SectionHeader>
);

export const SourceNoData = () => (
  <SectionHeader>Sorry, no Source available</SectionHeader>
);

export const showMessage = ({ message }) => (
  <SectionHeader>{message}</SectionHeader>
);
