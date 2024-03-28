import axios from "axios";
import { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";
import ModalEdit from "../components/ModalEdit";
import '../layout/styles.css';

export default function UserHome() {
  const [todos, setTodos] = useState([]);
  const [editIdx, setEditIdx] = useState(-1)
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    const run = async () => {
      let token = localStorage.getItem("token");
      const rs = await axios.get("http://localhost:3000/todos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(rs.data.todos);
    };
    run();
  }, [trigger]);

  const openModal = (id) => {
    let idx = todos.findIndex( el=> el.id === id)
    setEditIdx(idx)
    document.getElementById("my_modal_2").showModal()
  }

  const closeModal = () => {
    document.getElementById("my_modal_2").close()
  }

  return (
    <>
      {/* Left Side */}
      <div className="flex flex-col gap-4">
        <img src="https://i.pinimg.com/564x/fe/3c/da/fe3cda5c1ff52dc1ad87ab2fb0959025.jpg" alt="" className='baby1'/>
        <div className="relative">
          <h1 className="p1 relative z-10 flex flex-col items-start"> 
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <div>
              <span>ห้องพักสะอาด มี wifi</span>
            </div>
            <div>
              <span>อาหารเช้ารสชาติถูกใจ ถือว่าคุ้มกับราคา !! </span>
            </div>
          </h1>
        </div>

        <img src="https://i.pinimg.com/564x/ad/6b/a7/ad6ba7bf5446d0acbc39adb41cbc94c9.jpg" alt="" className='bb'/>
        <h1 className="p1 relative z-10 flex flex-col items-start"> 
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
          <div>
            <span>อาหารอร่อยมากค่ะ บรรยากาศดีค่ะ</span>
          </div>
          <div>
            <span>พนักงานยิ้มแย้มแจ่มใส น่ารักต้อนรับดีมากค่ะ </span>
          </div>
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-4">
        <img src="https://i.pinimg.com/564x/11/55/35/115535e42cd9eb2952b9b40312fa91eb.jpg" alt="" className='pa' />
        <h1 className="p1 relative z-10 flex flex-col items-start"> 
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
          <div>
            <span>ห้องนอน/เตียงนอนสะอาด สบายดี</span>
          </div>
        </h1>
        <img src="https://i.pinimg.com/564x/0a/cc/6a/0acc6ac57fa3e61c7663bbf45a0199a3.jpg" alt="" class='py w-30' />
        <div class="p1 relative z-10 flex flex-col items-start space-y-1 space-x-4"> 
          <div class="rating">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          </div>
          <div>
            <span>ให้คะแนน เต็มที่เลยค่ะชอบมาก ราคาเบาๆ</span>
          </div>
          <div>
            <span>แถมห้องกว้าง ความสะดวกครบครับ </span>
          </div>
          <div>
            <span>เหมาะพักสุดๆละ ใหม่ สะอาด :)))) 🧡✨ </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ModalEdit
        todos={todos}
        editIdx={editIdx}
        closeModal={closeModal}
      />
    </>
  );
}
