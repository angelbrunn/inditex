import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { redirect, useParams } from 'next/navigation';

import H2 from '@/components/Atoms/H2';
import Loading from '@/components/Loading';
import ROUTES from '@/lib/constants/routes';
import { useGetPodcasts } from '@/lib/hooks/useGetPodcasts';

import H3 from '@/components/Atoms/H3';
import { Paragraph } from '@/components/Atoms/Paragraph';
import { CardXlType, DEFAULT_INFO } from './contracts';

import { CardXlImageWrapper } from './style';

const CardXl: FC<CardXlType> = () => {
  const params: any = useParams();
  const { data, loading, error } = useGetPodcasts();
  const { podcastId } = params;
  const currentPodcast = data.find(
    (en: any) => en.id.attributes['im:id'] === podcastId
  );

  if (data && !currentPodcast) {
    redirect(ROUTES.router.podcast);
  }

  const info = currentPodcast
    ? {
        id: currentPodcast?.id?.attributes['im:id'],
        name: currentPodcast['im:name']?.label,
        title: currentPodcast?.title?.label,
        author: currentPodcast['im:artist']?.label,
        images: currentPodcast['im:image'],
        summary: currentPodcast?.summary?.label,
      }
    : DEFAULT_INFO;

  {
    if (loading || error) return <Loading loading={loading} error={error} />;
  }

  return (
    <>
      {data && currentPodcast ? (
        <Link
          href={`${ROUTES.router.podcast}/${info.id}`}
          data-testid="card-xl"
        >
          <CardXlImageWrapper>
            <motion.div
              className="product-card"
              initial={{ opacity: 0.2, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 10 * 0.08 }}
            >
              <Image
                src={info.images[2].label}
                width={200}
                height={200}
                alt={info.name}
              />
            </motion.div>
            <hr />
            <H2 title={info.name} />
            <div className="infoAuthor">{info.author}</div>
            <hr />
            <H3 title={'Description'} />
            <Paragraph>{info.summary}</Paragraph>
          </CardXlImageWrapper>
        </Link>
      ) : null}
    </>
  );
};

export default CardXl;
