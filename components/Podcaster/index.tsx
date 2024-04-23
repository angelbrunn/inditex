'use client';
import { useSelector } from 'react-redux';

import Search from '@/components/Search';
import Loading from '@/components/Loading';
import Card from '@/components/Cards/Card';
import { RootState } from '@/lib/redux/store';
import { filterPodcasts } from '@/lib/utils/utils';
import { useGetPodcasts } from '@/lib/hooks/useGetPodcasts';

import { GridContainer } from './style';

const Podcasts = () => {
  const { data, loading, error } = useGetPodcasts();
  let info = data;
  const searchValue = useSelector((state: RootState) => state.search.label);

  if (searchValue !== '') {
    const filteredBooks = filterPodcasts(data, searchValue);
    info = filteredBooks;
  }

  {
    if (loading || error) return <Loading loading={loading} error={error} />;
  }
  return (
    <>
      <Search />
      <GridContainer data-testid="podcaster-grid-container">
        {info
          ? info.map((item: any) => {
              let itemInfo = {
                id: item.id.attributes['im:id'],
                name: item['im:name'].label,
                title: item.title.label,
                author: item['im:artist'].label,
                images: item['im:image'],
              };
              return <Card info={itemInfo} key={item.id.attributes['im:id']} />;
            })
          : null}
      </GridContainer>
    </>
  );
};

export default Podcasts;
