import React from 'react';
import * as S from './News.css';
import * as T from '@/types';
import { assignInlineVars } from '@vanilla-extract/dynamic';
/*
 * @param children
 * Card 하단에 들어갈 텍스트 컨텐츠 [type: React.ReactNode]
 *
 */

export default function News() {
  return (
    <div className={S.newsWrapper}>
      <div className={S.newsHeader}>
        <p>최근 국회 뉴스</p>
      </div>
      <div className={S.newsContent}>
        <div className={S.leftItems}>
          <div className={S.itemContent}>문 대통령 신속히 추경</div>
          <div className={S.itemDate}>2024-03-10</div>
          <div className={S.itemContent}>문 대통령 신속히 추경</div>
          <div className={S.itemDate}>2024-03-10</div>
          <div className={S.itemContent}>문 대통령 신속히 추경</div>
          <div className={S.itemDate}>2024-03-10</div>
        </div>
        <div className={S.rightItems}>
          <div className={S.itemContent}>문 대통령 신속히 추경</div>
          <div className={S.itemDate}>2024-03-10</div>
          <div className={S.itemContent}>문 대통령 신속히 추경</div>
          <div className={S.itemDate}>2024-03-10</div>
          <div className={S.itemContent}>문 대통령 신속히 추경</div>
          <div className={S.itemDate}>2024-03-10</div>
        </div>
      </div>
    </div>
  );
}
