import React from 'react';
import * as S from './Category.css';
import * as T from '@/types';
import {
  Category0,
  Category1,
  Category10,
  Category11,
  Category12,
  Category13,
  Category14,
  Category15,
  Category16,
  Category17,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
  Category7,
  Category8,
  Category9,
} from '@/_assets/category';
import { CATEGORY_LIST } from '@/_constants';

export default function Category({ categoryId }: T.CategoryProps) {
  const svgList = [
    <Category0 key={0} className={S.styledSvg} />,
    <Category1 key={0} className={S.styledSvg} />,
    <Category2 key={0} className={S.styledSvg} />,
    <Category3 key={0} className={S.styledSvg} />,
    <Category4 key={0} className={S.styledSvg} />,
    <Category5 key={0} className={S.styledSvg} />,
    <Category6 key={0} className={S.styledSvg} />,
    <Category7 key={0} className={S.styledSvg} />,
    <Category8 key={0} className={S.styledSvg} />,
    <Category9 key={0} className={S.styledSvg} />,
    <Category10 key={0} className={S.styledSvg} />,
    <Category11 key={0} className={S.styledSvg} />,
    <Category12 key={0} className={S.styledSvg} />,
    <Category13 key={0} className={S.styledSvg} />,
    <Category14 key={0} className={S.styledSvg} />,
    <Category15 key={0} className={S.styledSvg} />,
    <Category16 key={0} className={S.styledSvg} />,
    <Category17 key={0} className={S.styledSvg} />,
  ];
  return (
    // 하나씩 뽑아올 때
    // <div className={S.wrapper}>
    //   {CATEGORY_LIST.map((category, i: number) => {
    //     return i === categoryId ? (
    //       <div className={S.styledSvg}>
    //         {svgList[i]}
    //         <div className={S.name}>{category.name}</div>
    //       </div>
    //     ) : (
    //       <></>
    //     );
    //   })}호
    // </div>

    <div className={S.listScrollWrapper}>
      <div className={S.listContainer}>
        {CATEGORY_LIST.map((category, i: number) => {
          return (
            <div className={S.categoryCard}>
              <div className={S.styledSvg}>{svgList[i]}</div>
              <p className={S.name}>{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
