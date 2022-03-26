import Link from "next/link";
import React from "react";
import Item from "./item";

export default function NewsCard({ article }) {
  const { by, id, score, time, title, type, url } = article;
  const date = new Date(time);

  const items = [
    {
      text: "Comment✏️",
    },
    { text: "Award🏆" },
    { text: "Share📤" },
    { text: "Save🏷️" },
  ];

  //   return (
  //     <button key={index} className="btn btn-light btn-sm">
  //       {value}
  //     </button>
  //   );
  // });

  // const items = [
  //   {
  //     svg: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="16"
  //         height="16"
  //         fill="currentColor"
  //         className="bi bi-chat-left-dots"
  //         viewBox="0 0 16 16"
  //       >
  //         <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
  //         <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
  //       </svg>
  //     ),
  //     text: "Comments",
  //   },
  //   {
  //     svg: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="16"
  //         height="16"
  //         fill="currentColor"
  //         className="bi bi-gift"
  //         viewBox="0 0 16 16"
  //       >
  //         <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
  //       </svg>
  //     ),
  //     text: "Award",
  //   },
  //   {
  //     svg: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="16"
  //         height="16"
  //         fill="currentColor"
  //         className="bi bi-share"
  //         viewBox="0 0 16 16"
  //       >
  //         <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  //       </svg>
  //     ),
  //     text: "Share",
  //   },
  //   {
  //     svg: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="16"
  //         height="16"
  //         fill="currentColor"
  //         className="bi bi-box-arrow-down"
  //         viewBox="0 0 16 16"
  //       >
  //         <path
  //           fillRule="evenodd"
  //           d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
  //         />
  //         <path
  //           fillRule="evenodd"
  //           d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
  //         />
  //       </svg>
  //     ),
  //     text: "Save",
  //   },
  // ];

  return (
    <div className="d-flex flex-row">
      <div className="p-3">
        <div className="text-primary text-center">&#9650;</div>
        <div className="text-primary text-center">{score}</div>
        <div className="text-primary text-center">&#9660;</div>
      </div>
      <Link href={url ?? "#"}>
        <a target={"_blank"} noreferrer noopener>
          <div className="d-flex flex-column p-3">
            <div>{date.toDateString()}</div>
            <div>{title}</div>
            <div>{by}</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="d-flex flex-row">
              {items?.map((item, index) => (
                <Item key={index} text={item?.text} />
              ))}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
