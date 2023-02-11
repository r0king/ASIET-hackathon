import React, { Component } from "react";
import prize1Img from "../../assets/Utils/gold1.webp";
import prize2Img from "../../assets/Utils/silver1.webp";
import prize3Img from "../../assets/Utils/bronze1.webp";
import { useWindowSize } from "react-use";
class PrizeCard extends Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${this.props.bg})`,
          }}
          className="
          relative
          aspect-square max-w-[500px] md:w-[600px] w-full  rounded-xl m-auto
          flex flex-col justify-center p-5 py-12 
          bg-contain bg-center bg-no-repeat scale-95"
        >
          <div
            className="uppercase top-0 md:top-5 left-0 md:left-9 right-0 absolute text-2xl md:text-2xl font-semibold text-center drop-shadow-[0px_0px_2px_rgba(0,0,0,0.15)] pt-5 pb-10"
            style={{
              color: this.props.colors.title,
            }}
          >
            {this.props.text}
          </div>
          <div className="flex justify-end ml-[50%] md:ml-0 md:mb-16">
            <div className="flex justify-center md:w-1/2 flex-col">
              <div
                className="
                 font-[Azonix] text-center font-extrabold text-transparent text-base md:text-2xl bg-clip-text bg-gradient-to-bl from-[#FAF4C6] via-[#D7B86C] to-[#FDFEFB]
                 drop-shadow-[0px_3px_5px_rgba(0,0,0,0.35)]  
                 md:pb-1 md:pt-16"
              >
                {this.props.prize}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </>
    );
  }
}

const PrizeCards = (props) => {
  const { width } = useWindowSize();
  return (
    <div className="flex flex-col rounded-2xl md:flex-row justify-center h-full w-full bg-gradient-to-r from-[#8F8F8E]/50 via-[#D5C17A]/50 to-[#DF968A]/50">
      {width < 640 ? (
        <>
          <PrizeCard
            bg={prize1Img}
            text={`First Prize ${props.title[0]}`}
            colors={{
              title: "#D5C17A",
            }}
            prize={props.prize[0]}
          />
          <PrizeCard
            bg={prize2Img}
            text={`Second Prize ${props.title[1]}`}
            colors={{
              title: "#D1D1D3",
            }}
            prize={props.prize[1]}
          />
          <PrizeCard
            bg={prize3Img}
            text={`Third Prize ${props.title[2]}`}
            colors={{
              title: "#DF968A",
            }}
            prize={props.prize[2]}
          />
        </>
      ) : (
        <>
          <PrizeCard
            bg={prize2Img}
            text={`Second Prize ${props.title[1]}`}
            colors={{
              title: "#D1D1D3",
            }}
            prize={props.prize[1]}
          />
          <div>
            <PrizeCard
              bg={prize1Img}
              text={`First Prize ${props.title[0]}`}
              colors={{
                title: "#D5C17A",
              }}

              prize={props.prize[0]}
            />
          </div>
          <PrizeCard
            bg={prize3Img}
            text={`Third Prize ${props.title[2]}`}
            colors={{
              title: "#DF968A",
            }}
            prize={props.prize[2]}
          />
        </>
      )}
    </div>
  );
};
export default PrizeCards;
