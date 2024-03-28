import React from 'react'
import { Link } from 'react-router-dom'

export default function Room() {
  return (
    <div className="flex justify-center flex-wrap">
      <Link to="/Reserve" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://i.pinimg.com/564x/fe/3c/da/fe3cda5c1ff52dc1ad87ab2fb0959025.jpg"
            alt="Zinc 15mg"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">ห้อง :เตียงคู่</h2>
          <p>ประเภท : ordinary</p>
          <p>ราคา : 1500</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      
      <Link to="/Reserve" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://i.pinimg.com/564x/ad/6b/a7/ad6ba7bf5446d0acbc39adb41cbc94c9.jpg"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">ห้อง : เตียงคู่</h2>
          <p>ประเภท : ordinary</p>
          <p>ราคา : 1500</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/Reserve" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://i.pinimg.com/564x/11/55/35/115535e42cd9eb2952b9b40312fa91eb.jpg"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">ห้อง : เตียงเดี่ยว</h2>
          <p>ประเภท : Sweet</p>
          <p>ราคา : 8000</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/Reserve" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://i.pinimg.com/564x/0a/cc/6a/0acc6ac57fa3e61c7663bbf45a0199a3.jpg"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">ห้อง : เตียงเดี่ยว</h2>
          <p>ประเภท : Sweet</p>
          <p>ราคา : 9000 </p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/Reserve" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://i.pinimg.com/564x/69/27/98/69279859af5c24ce5e3674ef916f6192.jpg"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">ห้อง : เตียงเดี่ยว</h2>
          <p>ประเภท : Sweet</p>
          <p>ราคา : 9000</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/Reserve" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://i.pinimg.com/564x/c8/ec/e7/c8ece7e1ce7896e2f7aaa3af4c0e9bda.jpg"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">ห้อง : เตียงเดี่ยว</h2>
          <p>ประเภท : Sweet</p>
          <p>ราคา : 8000</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      
    </div>
  )
}