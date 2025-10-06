"use client";
export default function FilterPrice() {
  return (
    <>
      <div className="filter-container">
        <h4>Filter Price</h4>
        <div className="filter-brice">
          <div className="ckeck-price">
            <input type="checkbox" id="price1" checked />
            <label htmlFor="price1">All price</label>
          </div>
          <span style={{ marginLeft: "82px" }}>1000</span>
        </div>
        <div className="filter-brice">
          <div className="ckeck-price">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">0 -100$</label>
          </div>
          <span style={{ marginLeft: "82px" }}>150$</span>
        </div>
        <div className="filter-brice">
          <div className="ckeck-price">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">100$ - 200$</label>
          </div>
          <span style={{ marginLeft: "51px" }}>295$</span>
        </div>
        <div className="filter-brice">
          <div className="ckeck-price">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">200$ - 300$</label>
          </div>
          <span style={{ marginLeft: "51px" }}>246$</span>
        </div>
        <div className="filter-brice">
          <div className="ckeck-price">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">300$ - 400$</label>
          </div>
          <span style={{ marginLeft: "51px" }}>145$</span>
        </div>
        <div className="filter-brice">
          <div className="ckeck-price">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">400$ 500$</label>
          </div>
          <span style={{ marginLeft: "59px" }}>168$</span>
        </div>
      </div>
      <div className="color-container">
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" checked />
            <label htmlFor="price1">All color</label>
          </div>
          <span style={{ marginLeft: "82px" }}>1000</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">Black</label>
          </div>
          <span style={{ marginLeft: "890px" }}>100</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">White</label>
          </div>
          <span style={{ marginLeft: "82px" }}>295</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">Red</label>
          </div>
          <span style={{ marginLeft: "82px" }}>145</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">Blue</label>
          </div>
          <span style={{ marginLeft: "82px" }}>264</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">Green</label>
          </div>
          <span style={{ marginLeft: "82px" }}>168</span>
        </div>
      </div>
    </>
  );
}
