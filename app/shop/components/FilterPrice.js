"use client";
export default function FilterPrice() {
  return (
    <>
      <div className="filter-container">
        <h4>Filter Price</h4>
        <div className="filter-brice">
          <div className="ckeck-price">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">All price</label>
          </div>
          <span>1000</span>
        </div>
        <div className="filter-brice">
          <div className="ckeck-price">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">0-100$</label>
          </div>
          <span>150$</span>
        </div>
        <div className="filter-brice">
          <div className="ckeck-price">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">100$-200$</label>
          </div>
          <span>295$</span>
        </div>
        <div className="filter-brice">
          <div className="ckeck-price">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">200$-300$</label>
          </div>
          <span>246$</span>
        </div>
        <div className="filter-brice">
          <div className="ckeck-price">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">300$-400$</label>
          </div>
          <span>145$</span>
        </div>
        <div className="filter-brice">
          <div className="ckeck-price">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">400$-500$</label>
          </div>
          <span>168$</span>
        </div>
      </div>
      <div className="color-container">
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" checked />
            <label htmlFor="price1">All color</label>
          </div>
          <span>1000</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">Black</label>
          </div>
          <span>100</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">White</label>
          </div>
          <span >295</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">Red</label>
          </div>
          <span >145</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">Blue</label>
          </div>
          <span >264</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">Green</label>
          </div>
          <span >168</span>
        </div>
      </div>
      <div className="color-container">
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" checked />
            <label htmlFor="price1">Filter by size</label>
          </div>
          <span>1000</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">XS</label>
          </div>
          <span>100</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">S</label>
          </div>
          <span >295</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">M</label>
          </div>
          <span >145</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">L</label>
          </div>
          <span >264</span>
        </div>
        <div className="ckeck-color">
          <div className="first-color">
            <input type="checkbox" id="price1" />
            <label htmlFor="price1">XL</label>
          </div>
          <span >168</span>
        </div>
      </div>
    </>
  );
}
