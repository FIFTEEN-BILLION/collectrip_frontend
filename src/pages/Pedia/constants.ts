import HolidayBuddhaPNG from '@assets/images/badges/holiday-buddha.png';
import HolidayChildrenPNG from '@assets/images/badges/holiday-children.png';
import HolidayChristmasPNG from '@assets/images/badges/holiday-christmas.png';
import HolidayChuseokPNG from '@assets/images/badges/holiday-chuseok.png';
import PurchaseVeganPNG from '@assets/images/badges/purchase-vegan.png';
import PurchaseMeatPNG from '@assets/images/badges/purchase-meat.png';
import PurchaseLiquorPNG from '@assets/images/badges/purchase-liquor.png';
import GotoOceanPNG from '@assets/images/badges/goto-ocean.png';
import GotoMountainPNG from '@assets/images/badges/goto-mountain.png';
import TripBusanPNG from '@assets/images/badges/trip-busan.png';
import TripYesanPNG from '@assets/images/badges/trip-yesan.png';
import TripDaejeonPNG from '@assets/images/badges/trip-daejeon.png';

export const pediaItems = [
  {
    title: 'Holidays 배지',
    badges: [
      { img: HolidayChildrenPNG, collect: true, achievement: '어린이날에 여행하기' },
      { img: HolidayBuddhaPNG, collect: true, achievement: '부처님 오신날에 여행하기' },
      { img: HolidayChristmasPNG, collect: false, achievement: '크리스마스에 여행하기' },
      { img: HolidayChuseokPNG, collect: false, achievement: '추석에 여행하기' },
    ],
  },
  {
    title: '식품품 배지',
    badges: [
      { img: PurchaseVeganPNG, collect: true, achievement: '채소 구매하기' },
      { img: PurchaseMeatPNG, collect: true, achievement: '육류 구매하기' },
      { img: PurchaseLiquorPNG, collect: true, achievement: '주류 구매하기' },
    ],
  },
  {
    title: '장소 배지',
    badges: [
      { img: GotoOceanPNG, collect: true, achievement: '바다로 여행가기' },
      { img: GotoMountainPNG, collect: true, achievement: '산으로 여행가기' },
    ],
  },
  {
    title: '지역 배지',
    badges: [
      { img: TripBusanPNG, collect: true, achievement: '부산으로 여행가기' },
      { img: TripYesanPNG, collect: true, achievement: '예산으로 여행가기' },
      { img: TripDaejeonPNG, collect: false, achievement: '대전으로 여행가기' },
    ],
  },
];

export const progressItems = [
  {
    goal: 10,
    text: '네오 캐릭터 획득',
  },
  {
    goal: 15,
    text: '바다 오브제 획득',
  },
  {
    goal: 20,
    text: '바다 오브제 획득',
  },
  {
    goal: 25,
    text: '바다 오브제 획득',
  },
  {
    goal: 30,
    text: '라이언 캐릭터 획득',
  },
  {
    goal: 35,
    text: '산 오브제 획득',
  },
  {
    goal: 40,
    text: '산 오브제 획득',
  },
  {
    goal: 45,
    text: '산 오브제 획득',
  },
  {
    goal: 50,
    text: '튜브 캐릭터 획득',
  },
];
