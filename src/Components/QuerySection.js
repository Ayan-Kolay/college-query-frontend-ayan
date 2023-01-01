import React from "react";
import moment from "moment";


const QuerySection = (props) => {
    console.log(this.props);
    const data = this.props;
    return(
        <div className="mt-10">
        {data &&
          data.map((item, index) => {
              // console.log(item);
              return (
                  <div className="px-5 py-3 border-b-2">
                <div></div>

                <div className="text-xl font-[800]">{item.name}</div>
                <div className="text-slate-600 text-sm">{moment(item.date_created).fromNow()}</div>
                <div className="text-xl font-[600]">{item.question}</div>
                <div className="text-slate-600 text-sm"> {item.questionDescription}</div>
                <div className="interarction ">
                {/* <i className="text-xl font-[600] mx-1 cursor-pointer" onClick={e => {Upvote(item)}}>Upvote</i>
                <i className="text-xl font-[600] mx-4 cursor-pointer" onClick={e => {Answers(item)}}>Answers</i> */}
                </div>
              </div>
            );
          })}
      </div>
)
}

export default QuerySection;