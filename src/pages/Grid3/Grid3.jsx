import "../Grid3/Grid3.scss";
import image1 from '../../assets/images/solar-eclipse.png'

const Grid3 = () => {
  return (
    <>
        <main className="bento">
        <div className="bento__container--variant-1">
            <div className="bento__item--test1" style="--rows: span 2; --columns: 1 / -1;"></div>
            <div className="bento__item" style="--rows: span 2;"></div>
            <div className="bento__item" style="--rows: span 2; --columns: span 2;"></div>
            <div className="bento__item" style="--columns: 1 / -1;"></div>
            <div className="bento__item" style="--columns: span 2;"></div>
            <div className="bento__item"></div>
        </div>
        <div className="bento__container--variant-2">
            <div className="bento__item" style="--columns: span 2;"></div>
            <div className="bento__item" style="--columns: span 2;"></div>
            <div className="bento__item" style="--rows: span 4; --columns: 1 / -1"></div>
            <div className="bento__item"></div>
            <div className="bento__item" style="--columns: span 2;"></div>
            <div className="bento__item"></div>
        </div>
        <div className="bento__container--variant-3">
            <div className="bento__item" style="--rows: span 2; --columns: 1 / -1;"></div>
            <div className="bento__item" style="--rows: span 2;"></div>
            <div className="bento__item" style="--rows: span 2;"></div>
            <div className="bento__item" style="--columns: 1 / -1;"></div>
            <div className="bento__item" style="--columns: 1 / -1;"></div>
        </div>
        </main>
    </>
  );
};

export {Grid3}
