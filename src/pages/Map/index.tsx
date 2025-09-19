import { webPath } from '@router/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import * as header from '@styles/header.css';
import LogoSVG from '@assets/logo.svg?react';
import MenuSVG from '@assets/icons/menu.svg?react';
import CrossSVG from '@assets/icons/cross.svg?react';

const MapHeader = () => {
  const navigate = useNavigate();

  const handleClickMenu = () => {
    navigate(webPath.mypage);
  };

  return (
    <div className={header.container} style={{ position: 'relative', zIndex: 1 }}>
      <LogoSVG className={header.logo} />
      <MenuSVG className={header.icon({})} onClick={handleClickMenu} />
    </div>
  );
};

import LeftCarouselSVG from '@assets/icons/left-carousel.svg?react';
import SearchSVG from '@assets/icons/search.svg?react';
import * as search from './search.css';
import AlertCircleSVG from '@assets/icons/alert-circle.svg?react';
import CrossCircleSVG from '@assets/icons/cross-circle.svg?react';

const searchExamples = [
  {
    title: '동명(읍, 면)',
    example: '예) 서초동',
  },
  {
    title: '기념품명',
    example: '예) 사과',
  },
];

const popularSearchMock = ['강릉', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기'];

const MapSearch = ({ handleChangeSearchValue }: { handleChangeSearchValue: (value: string) => void }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSearchOpen = location.state?.isSearchOpen;
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState('');
  // const inputTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // const [lastValue, setLastValue] = useState('');
  // const [searchResult, setSearchResult] = useState<any[]>([]);

  const [recentSearchList, setRecentSearchList] = useState<string[]>(
    JSON.parse(localStorage.getItem('recentSearchList') || '[]'),
  );

  const handleClickBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!isSearchOpen) {
      console.log('isSearchOpen', isSearchOpen);
      inputRef.current?.blur();
    }
  }, [isSearchOpen]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    if (
      value.length > 1 &&
      (value.at(-1) === ' ' || value.at(-1) === '\t') &&
      (value.at(-2) === ' ' || value.at(-2) === '\t')
    ) {
      return;
    }
    // if (inputTimeoutRef.current) {
    //   clearTimeout(inputTimeoutRef.current);
    // }
    if (value === input) return;
    setInput(value);
    if (!value) return;
    // inputTimeoutRef.current = setTimeout(() => {
    //   console.log('value', value);
    //   fetchSearch(value);
    // }, 500);
  };

  const handleClickRecentSearch = (item: string) => () => {
    setInput(item);
  };

  const handleClickRecentSearchDelete = (item: string) => (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    e.preventDefault();
    localStorage.setItem('recentSearchList', JSON.stringify(recentSearchList.filter((e) => e !== item)));
    setRecentSearchList((prev) => {
      const newRecentSearchList = prev.filter((e) => e !== item);
      localStorage.setItem('recentSearchList', JSON.stringify(newRecentSearchList));
      return newRecentSearchList;
    });
  };

  const handleClickPopularSearch = (item: string) => () => {
    setInput(item);
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleChangeSearchValue(input);
      setRecentSearchList((prev) => {
        const newRecentSearchList = [input, ...prev.filter((e) => e !== input)];
        localStorage.setItem('recentSearchList', JSON.stringify(newRecentSearchList));
        return newRecentSearchList;
      });
      navigate(-1);
    }
  };

  const handleClickResetSearch = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setInput('');
    handleChangeSearchValue('');
  };

  return (
    <div className={search.container({ isSearchOpen })}>
      <div className={search.header}>
        {isSearchOpen && <LeftCarouselSVG className={search.backButton} onClick={handleClickBack} />}
        <label
          className={search.inputContainer}
          onClick={() => {
            if (isSearchOpen) return;
            navigate('', { state: { isSearchOpen: true } });
          }}
        >
          {!input && <SearchSVG className={search.inputIcon} />}
          <input
            ref={inputRef}
            type="text"
            placeholder="장소를 검색해 주세요"
            className={search.input}
            onChange={handleChangeInput}
            value={input}
            onKeyDown={handleKeyDownInput}
          />
          {input && <CrossSVG onClick={handleClickResetSearch} />}
        </label>
      </div>
      {isSearchOpen && (
        <div className={search.content}>
          {input ? (
            <div></div>
          ) : (
            <div className={search.emptyValueContainer}>
              <div className={search.recentContainer}>
                <p className={search.recentTitle}>최근 검색</p>
                {recentSearchList.length > 0 ? (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    {recentSearchList.map((item) => (
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: '500',
                          color: '#373737',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          height: '32px',
                        }}
                        onClick={handleClickRecentSearch(item)}
                      >
                        {item}
                        <CrossCircleSVG onClick={handleClickRecentSearchDelete(item)} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={search.recentEmptyContent}>
                    <p className={search.recentEmptyTitle}>최근 검색 내역이 없어요</p>
                    <div className={search.recentEmptyDescriptionContainer}>
                      <span className={search.recentEmptyDescriptionTitle}>
                        <AlertCircleSVG />
                        이렇게 검색해 보세요
                      </span>
                      <ul className={search.recentEmptyDescriptionList}>
                        {searchExamples.map((example) => (
                          <li className={search.recentEmptyDescriptionItem}>
                            {example.title}
                            <p className={search.recentEmptyDescriptionItemExample}>{example.example}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className={search.popularContainer}>
                <p className={search.popularTitle}>지금 많이 찾고 있어요</p>
                <div className={search.popularContent}>
                  {popularSearchMock.map((item, index) => (
                    <div className={search.popularItem} onClick={handleClickPopularSearch(item)}>
                      <span className={search.popularItemIndex}>{index + 1}</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const MapSearchResult = ({
  searchResult,
}: {
  searchResult: {
    title: string;
    category: string;
    address: string;
    image: string;
    rate: number;
  }[];
}) => {
  const location = useLocation();
  const isSearchResultExpand = location.state?.isSearchResultExpand;
  const navigate = useNavigate();

  const minHeight = 64 + 200;
  const maxHeight = window.innerHeight - 20;

  const expandStartYRef = useRef(0);
  const expandCurrentYRef = useRef(0);
  const [expandHeight, setExpandHeight] = useState(minHeight);

  const windowHeight = window.innerHeight;
  const [startExpand, setStartExpand] = useState(false);

  const handleTouchStartExpand = (e: React.TouchEvent<HTMLDivElement>) => {
    expandStartYRef.current = e.touches[0].clientY;
    expandCurrentYRef.current = e.touches[0].clientY;
    setStartExpand(true);
  };

  const handleTouchMoveExpand = (e: React.TouchEvent<HTMLDivElement>) => {
    expandCurrentYRef.current = e.touches[0].clientY;
    console.log(expandCurrentYRef.current, expandStartYRef.current);
    console.log(minHeight + expandStartYRef.current - expandCurrentYRef.current);

    setExpandHeight(minHeight + expandStartYRef.current - expandCurrentYRef.current);
  };

  const handleTouchEndExpand = () => {
    const touchY = expandCurrentYRef.current;
    setStartExpand(false);
    if (touchY < windowHeight / 2) {
      navigate('', { state: { isSearchResultExpand: true } });
    } else {
      setExpandHeight(minHeight);
    }
  };

  useEffect(() => {
    if (isSearchResultExpand) {
      console.log('isSearchResultExpand', isSearchResultExpand);
      setExpandHeight(maxHeight);
    } else {
      setExpandHeight(minHeight);
    }
  }, [isSearchResultExpand]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        height: `${expandHeight}px`,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        transition: !startExpand ? 'height 0.3s ease-in-out' : 'none',
        outline: '1px solid #E9E9E9',
        borderRadius: '12px 12px 0 0',
        backgroundColor: 'white',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '12px',
          // backgroundColor: 'blue',
        }}
        onTouchStart={handleTouchStartExpand}
        onTouchMove={handleTouchMoveExpand}
        onTouchEnd={handleTouchEndExpand}
      >
        <span
          style={{
            width: '64px',
            height: '4px',
            backgroundColor: '#8C8C8C',
            borderRadius: '999px',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0 20px',
        }}
      >
        <p
          style={{
            fontSize: '12px',
            fontWeight: '700',
            color: '#5A5A5A',
            padding: '4px 0',
          }}
        >
          <b style={{ color: '#CB0404' }}>{searchResult.length}개</b>의 해당하는 물품을 찾았습니다
        </p>
        {searchResult.map((item) => {
          const ratePercent = item.rate / 5;

          return (
            <div
              key={item.title}
              style={{
                display: 'flex',
                gap: '8px',
                padding: '10px 0',
              }}
            >
              <img
                src={item.image}
                // alt={item.title}
                style={{
                  width: '120px',
                  height: '96px',
                  objectFit: 'cover',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '8px',
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: '700',
                      color: '#373737',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: '400',
                      color: '#373737',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.category}
                  </p>
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#373737',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.address}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '2px',
                    alignItems: 'center',
                  }}
                >
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#FF5D5D',
                    }}
                  >
                    {item.rate.toFixed(1)}
                  </p>
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      color: 'transparent',
                      filter: '',
                      backgroundClip: 'text',
                      background: `linear-gradient(to right, #FF5D5D ${ratePercent * 100}%, #BDBDBD ${
                        ratePercent * 100
                      }%)`,
                      WebkitBackgroundClip: 'text',
                    }}
                  >
                    ★★★★★
                  </p>
                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#BDBDBD',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    (87)ㆍ영업 중
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MapPage = () => {
  const [searchResult, setSearchResult] = useState<
    | {
        title: string;
        category: string;
        address: string;
        image: string;
        rate: number;
      }[]
    | null
  >(null);

  const fetchSearch = async (value: string) => {
    // const baseUrl = 'https://openapi.naver.com';
    const baseUrl = '/api/naver';

    const response = await fetch(`${baseUrl}/v1/search/local.json?query=${value}&display=20&start=1&sort=random`, {
      method: 'GET',
      headers: {
        'X-Naver-Client-Id': import.meta.env.VITE_APP_NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': import.meta.env.VITE_APP_NAVER_CLIENT_SECRET,
      },
    });
    const data = await response.json();
    const items = data.items.map((item: { title: string; category: string; address: string; image: string }) => ({
      title: item.title.replace(/<b>/g, '').replace(/<\/b>/g, ''),
      category: item.category,
      address: item.address,
      image: item.image,
      rate: Math.random() * 2 + 3,
    }));
    return items;
  };

  const handleChangeSearchValue = async (value: string) => {
    if (!value) {
      setSearchResult(null);
      return;
    }
    const searchResult = await fetchSearch(value);
    console.log('searchResult', searchResult);
    setSearchResult(searchResult);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <MapHeader />
      <div
        style={{
          flexGrow: 1,
        }}
      >
        <MapSearch handleChangeSearchValue={handleChangeSearchValue} />
        {searchResult && <MapSearchResult searchResult={searchResult} />}

        {/* <MapSearchResult
          searchResult={[
            {
              title: '에이에스디 (ASD)',
              category: '쇼핑,유통>가정,생활용품',
              address: '서울특별시 마포구 동교동 177-11',
              image: 'item.image',
              rate: Math.random() * 2 + 3,
            },
          ]}
        /> */}
      </div>
    </div>
  );
};

export default MapPage;
