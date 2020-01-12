// import React from "react";
// import { ExperiencesFormContainer } from "../../containers";

type Experience = {
  readonly id: string;
  readonly title: string;
  readonly author: string;
  readonly remixed: boolean;
};
export type Props = {
  readonly loading: boolean;
  readonly experiences: readonly Experience[];
  readonly errors: {};
};

// export const Experiences = ({ loading, experiences, errors }: Props) => {
//   return (
//     <div>
//       <ExperiencesFormContainer />
//       {loading ? "Loading..." : undefined}
//       {/* { errors ? JSON.stringify(errors) : undefined } */}
//       <ul>
//         {!loading && experiences
//           ? experiences.map(e => (
//             <li key={e.id}>
//                 <span>
//                   {e.remixed ? (
//                     <i className="remixed-on" />
//                   ) : (
//                     <i className="remixed-off" />
//                   )}}

// {e.author}
//                 <span>{e.title}</span>
//               </li>
//             ))
//           : undefined}
//       </ul>
//       <style jsx>
//                     {`
//           div {
//             background: #fea49f;
//             padding: 1em;
//           }
//           li {
//             background: #fff;
//             color: #ffa500;
//             font-weight: bold;
//             margin-bottom: 1em;
//             padding: 0.5em;
//             border-radius: 2px;
//             display: flex;
//             justify-content: center;
//             flex-direction: column;
//           }
//           span {
//             display: block;
//           }
//           span:first-of-type {
//             color: #ff7373;
//             font-size: 12px;
//             line-height: 1;
//           }

//           i {
//             display: inline-block;
//             margin-right: 0.5em;
//             border-radius: 48%;
//             width: 8px;
//             height: 8px;
//             cursor: pointer;
//             transition: all 0.2s ease;
//             will-change: width, height, opacity;
//           }
//           i:hover {
//             opacity: 0.8;
//             width: 9px;
//             height: 9px;
//           }
//           i.remixed-off {
//             background: #bd2c00;
//           }
//           i.remixed-on {
//             background: #6cc644;
//           }
//         `}
//               </style>
//     </div>
//   );
// };
