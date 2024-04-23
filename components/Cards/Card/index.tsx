import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import ROUTES from '@/lib/constants/routes';
import { getRandomNumber } from '@/lib/helpers/functions';

import {
  CardImage,
  CardTitle,
  CardWrapper,
  CardSubtitle,
  CardImageWrapper,
} from './style';

import { CardType } from './contracts';

const Card: FC<CardType> = ({ info }) => {
  return (
    <Link href={`${ROUTES.router.podcast}/${info.id}`}>
      <motion.div
        className="product-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: getRandomNumber() * 0.08 }}
      >
        <CardWrapper>
          <CardImageWrapper>
            <CardImage
              src={info.images[2].label}
              width={200}
              height={200}
              alt={info.name}
              priority={true}
            />
          </CardImageWrapper>
          <CardTitle title={info.name} />
          <CardSubtitle>{info.author}</CardSubtitle>
        </CardWrapper>
      </motion.div>
    </Link>
  );
};

export default Card;
