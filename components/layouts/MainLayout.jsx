import Image from "next/image";
import { colors } from "/styles";

function MainLayout({ children }) {
  return (
    <>
      <div className="container">
        <div className="background-image">
          <Image
            src={`/images/cloud-background.jpg`}
            objectFit="cover"
            layout="fill"
            priority={true}
          />
        </div>
        {children}
      </div>
      <style jsx>{`
        .container {
          box-sizing: border-box;
          background: ${colors.primaryBackground};
          width: 100%;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }
        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          min-width: 100%;
          min-height: 100vh;
          height: 100%;
          z-index: 0;
          opacity: 0.25;
        }
      `}</style>
    </>
  )
}

export default MainLayout