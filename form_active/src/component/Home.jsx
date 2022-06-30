import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { cookieFilter } from "../helper";

export default function Home() {
  const API_MAIL = "http://localhost:8001/send_email";

  const token = cookieFilter();

  const [field, setField] = useState({
    code: "",
    password: "",
    email: "",
    isActive: true,
  });

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setField({
      ...field,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    ///send email
    const res = await axios(API_MAIL, {
      method: "POST",
      data: field,
    });

    console.log(res);

    if (!res.data.success) {
      if (res.data.confirm === false) {
        swal({
          title: "Bạn muốn thay đổi email ?",
          text: res.data.message,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willChange) => {
          if (willChange) {
            const update = field;
            update.confirm = true;
            const render = async () => {
              const result = await axios(API_MAIL, {
                method: "POST",
                data: update,
              });
              console.log(result);
              document.cookie = `jwt_user=${result.data.accessToken}; expires= `;

              setTimeout(() => {
                window.location.reload();
              }, 500);
            };
            render();
          }
        });
      } else return swal(res.data.message);
    } else {
      setTimeout(() => {
        document.cookie = `jwt_user=${res.data.accessToken}; expires= `;

        setTimeout(() => {
          window.location.reload();
        }, 500);
      }, 100);
    }
  };

  return (
    <>
      <div className="background" />
      <div className="text">
        <span>
          {token !== undefined ? "Xác thực thành công!" : "Xin chào!"}{" "}
        </span>
      </div>
      <div className="account">
        <div className="account__sign-up">
          <h1>Nhóm 12</h1>
          <p>Dịch vụ gửi bảng điểm sinh viên qua Email</p>
        </div>
        <div className="account__form animaltion-right right " id="sign-up">
          <form
            onSubmit={handleSubmit}
            className="login sign-up d-block"
          >
            <h3>Đăng ký dịch vụ</h3>
            {token !== undefined ? (
              <p className="text__alert">
                Cảm ơn bạn đã sử dụng dịch vụ
                <br /> Thành tích học tập của bạn sẽ được gửi về mail đăng ký
                ngay khi được cập nhật điểm.
              </p>
            ) : (
              <>
                <input
                  type="text"
                  name="code"
                  className="btn"
                  defaultValue={field.code}
                  onChange={onChangeField}
                  autoFocus
                  required
                  placeholder="Mã sinh viên"
                />
                <br />
                <input
                  type="password"
                  name="password"
                  defaultValue={field.password}
                  onChange={onChangeField}
                  className="btn"
                  required
                  placeholder="Mật khẩu"
                />
                <br />
                <input
                  type="email"
                  name="email"
                  defaultValue={field.email}
                  onChange={onChangeField}
                  className="btn"
                  required
                  placeholder="Email đăng ký"
                />
                <br />
                <br />
                <input type="submit" value="Đăng ký" className="btn button" />
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
