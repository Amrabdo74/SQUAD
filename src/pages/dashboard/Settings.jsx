const Settings = () => {
  return (
    <div className="card-body ">
      <div className="row g-4">
        <div className="col-lg-6 col-md-6">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">الإعدادات العامة</h3>
              <div className="card-tools">

              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-12 form-floating mb-3">
                  <div className="input-group flex-nowrap">
                    <select
                      required
                      className="form-control"
                      name="lang"
                      id="lang"
                      data-select2-id="lang"
                      aria-hidden="true"
                    >
                      <option value>--اختر اللغه--</option>
                      <option value="en">English</option>
                      <option value="ar">العربية</option>
                    </select>
                    {/* <label htmlFor="lang">اللغة</label> */}
                  </div>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    className="form-control form-control-sm"
                    defaultValue=""
                    id="name"
                    placeholder="إسم المؤسسة "
                    name="name"
                  />
                  <label htmlFor="name">إسم المؤسسة</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    className="form-control form-control-sm"
                    defaultValue=""
                    id="address"
                    placeholder="العنوان "
                    name="address"
                  />
                  <label htmlFor="address">العنوان</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="file"
                    className="form-control form-control-sm"
                    id="logo"
                    placeholder=" logo"
                    name="logo"
                  />
                  <label htmlFor="logo">لوجو </label>
                </div>
                <div className="col-12 form-floating mb-3">

                  <input
                    type="text"
                    autoComplete="true"
                    className="form-control form-control-sm"
                    id="commercial_number"
                    placeholder="رقم السجل التجاري "
                    name="commercial_number"
                  />
                  <label htmlFor="commercial_number">رقم السجل التجاري</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    className="form-control form-control-sm"
                    id="commercial_id"
                    placeholder="رقم التسجل الضريبى "
                    name="commercial_id"
                  />
                  <label htmlFor="commercial_id">رقم التسجل الضريبى</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <textarea
                    className="form-control form-control-sm resize-none"
                    id="vision"
                    placeholder="الرؤية"
                    name="vision"
                    defaultValue={""}
                  />
                  <label htmlFor="vision">الرؤية</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <textarea
                    className="form-control form-control-sm resize-none"
                    id="mission"
                    placeholder="الرسالة "
                    name="mission"
                    defaultValue
                  />
                  <label htmlFor="mission">الرسالة</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">بيانات التواصل</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-12 form-floating mb-3">
                  <input
                    type="email"
                    autoComplete="true"
                    defaultValue=""
                    className="form-control form-control-sm"
                    id="email"
                    placeholder=" البريد الإلكترونى"
                    name="email"
                  />
                  <label htmlFor="email">البريد الإلكترونى 1</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="email"
                    autoComplete="true"
                    defaultValue=""
                    className="form-control form-control-sm"
                    id="email2"
                    placeholder=" البريد الإلكترونى"
                    name="email2"
                  />
                  <label htmlFor="email2">البريد الإلكترونى 2</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    defaultValue=""
                    className="form-control form-control-sm"
                    id="website"
                    placeholder="موقع الويب "
                    name="website"
                  />
                  <label htmlFor="website">موقع الويب</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    className="form-control form-control-sm"
                    id="website2"
                    placeholder="موقع الويب "
                    name="website2"
                  />
                  <label htmlFor="website2">موقع الويب2</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    className="form-control form-control-sm"
                    id="website3"
                    placeholder=" موقع الويب"
                    name="website3"
                  />
                  <label htmlFor="website3">موقع الويب3</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    defaultValue=""
                    className="form-control form-control-sm"
                    id="location"
                    placeholder=" الموقع"
                    name="location"
                  />
                  <label htmlFor="location">الموقع</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    className="form-control form-control-sm"
                    id="tel1"
                    placeholder="التليفون الأرضى"
                    name="tel1"
                  />
                  <label htmlFor="tel1">التليفون الأرضى</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    defaultValue=""
                    className="form-control form-control-sm"
                    id="tel2"
                    placeholder="التليفون المحمول "
                    name="tel2"
                    title="لابد من كتابة رقم الهاتف المكون من 11 رقم"
                  />
                  <label htmlFor="tel2">التليفون المحمول</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    defaultValue=""
                    className="form-control form-control-sm"
                    id="whatsApp"
                    placeholder="واتس-اب"
                    name="whatsApp"
                    title="لابد من كتابة رقم الهاتف المكون من 11 رقم"
                  />
                  <label htmlFor="whatsApp">واتس-اب</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="card card-warning">
            <div className="card-header">
              <h3 className="card-title">سوشيال</h3>
              {/* <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="maximize"
                >
                  <i className="fas fa-expand" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div> */}
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    defaultValue=""
                    className="form-control form-control-sm"
                    id="faceBook"
                    placeholder="فيسبوك"
                    name="faceBook"
                  />
                  <label htmlFor="faceBook">فيسبوك</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    defaultValue=""
                    className="form-control form-control-sm"
                    id="instegram"
                    placeholder="إنستجرام"
                    name="instegram"
                  />
                  <label htmlFor="instegram">إنستجرام</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    defaultValue=""
                    className="form-control form-control-sm"
                    id="twitter"
                    placeholder="تويتر"
                    name="twitter"
                  />
                  <label htmlFor="twitter">تويتر</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    className="form-control form-control-sm"
                    id="twitter"
                    placeholder="يوتيوب"
                    name="youtube"
                  />
                  <label htmlFor="youtube">يوتيوب</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    className="form-control form-control-sm"
                    id="linkedin"
                    placeholder="لينكد ان"
                    name="linkedin"
                  />
                  <label htmlFor="linkedin">لينكد ان</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    autoComplete="true"
                    className="form-control form-control-sm"
                    id="tiktok"
                    placeholder="تيك توك"
                    name="tiktok"
                  />
                  <label htmlFor="tiktok">تيك توك</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="card card-secondary">
            <div className="card-header">
              <h3 className="card-title">من نحن</h3>
              {/* <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="maximize"
                >
                  <i className="fas fa-expand" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div> */}
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-12 form-floating mb-3">
                  <textarea
                    type="text"
                    className="form-control form-control-sm resize-none"
                    id="about_us"
                    placeholder="من نحن"
                    name="about_us"
                    defaultValue={""}
                  />
                  <label htmlFor="about_us">من نحن</label>
                  {/* <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
