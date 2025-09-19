import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    top: 0,
    background: 'white',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  variants: {
    isSearchOpen: {
      true: {
        position: 'absolute',
      },
    },
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '12px',
});

export const backButton = style({
  width: '24px',
  height: 'auto',
  aspectRatio: '1/1',
  flexShrink: 0,
});

export const inputContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  padding: '12px',
  backgroundColor: '#F8F8F8',
  borderRadius: '8px',
  width: '100%',
  boxSizing: 'border-box',
});

export const inputIcon = style({
  width: '20px',
  height: 'auto',
  aspectRatio: '1/1',
  flexShrink: 0,
});

export const input = style({
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '14px',
  fontWeight: '600',
  color: '#000',
  width: '100%',
});
//

// {isSearchOpen && (
//   <div>
//     {input ? (
//       <div></div>
//     ) : (
//       <div>
//         <div>
//           <p>최근 검색</p>
//           <div>
//             <p>최근 검색 내역이 없어요</p>
//             <div>
//               <span>이렇게 검색해 보세요</span>
//               <ul>
//                 <li>
//                   동명(읍, 면)
//                   <p>예) 서초동</p>
//                 </li>
//                 <li>
//                   기념품명
//                   <p>예) 사과</p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div>
//           <p>지금 많이 찾고 있어요</p>
//           <div>
//             <div>
//               <span>1</span>
//               강릉
//             </div>
//           </div>
//         </div>
//       </div>
//     )}
//   </div>
// )}

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '0px 20px',
});

export const emptyValueContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const recentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const recentTitle = style({
  fontSize: '16px',
  fontWeight: '700',
  color: '#1A1A1A',
});

export const recentEmptyContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const recentEmptyTitle = style({
  fontSize: '14px',
  fontWeight: '500',
  color: '#7C7C7C',
  textAlign: 'center',
});

export const recentEmptyDescriptionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '16px',
  border: '1px solid #E9E9E9',
  borderRadius: '8px',
});

export const recentEmptyDescriptionTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',

  fontSize: '14px',
  fontWeight: '500',
  color: '#5A5A5A',
});

export const recentEmptyDescriptionList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  margin: 0,
  padding: '0px 24px',
});

export const recentEmptyDescriptionItem = style({
  fontSize: '14px',
  fontWeight: '500',
  color: '#5A5A5A',
});

export const recentEmptyDescriptionItemExample = style({
  color: '#7C7C7C',
});

//

export const popularContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const popularTitle = style({
  fontSize: '16px',
  fontWeight: '700',
  color: '#1A1A1A',
});

export const popularContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const popularItem = style({
  fontSize: '14px',
  fontWeight: '700',
  color: '#373737',
  padding: '4px',
});

export const popularItemIndex = style({
  display: 'inline-block',
  fontSize: '14px',
  fontWeight: '700',
  width: '20px',
  color: '#373737',
});
