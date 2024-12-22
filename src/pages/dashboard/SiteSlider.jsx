import React from 'react'

const SiteSlider = () => {
  return (
<form className="form-horizontal" action="http://localhost/folsscap/ar/slider/store" method="POST" encType="multipart/form-data">
  <input type="hidden" name="_token" defaultValue="dm0xWazpAZgZiCyBRhhEl9AcYsepNChbuMixfJIX" autoComplete="off" />                            <div className="card-body">
    <div className="row ">
      <div className="col-12  col-md-4 form-floating mb-3">
        <div className="input-group ">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="nav-icon fas fa-image" /></span>
          </div>
          <input type="file" id="back_image" className="form-control" name="back_image" accept="image/*" required />
          <label htmlFor="back_image" className="col-form-label">الصورة الخلفية</label>
        </div>
      </div>
      <div className="col-12  col-md-4 form-floating mb-3">
        <div className="input-group ">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="nav-icon fas fa-image" /></span>
          </div>
          <input type="text" id="name_ar" autoComplete="true" className="form-control" name="name_ar" fdprocessedid="0test3" />
          <label htmlFor="name_ar" className="col-form-label">الاسم-عربي</label>
        </div>
      </div>
      <div className="col-12  col-md-4 form-floating mb-3">
        <div className="input-group ">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="nav-icon fas fa-image" /></span>
          </div>
          <input type="text" id="name_en" autoComplete="true" className="form-control" name="name_en" fdprocessedid="g2filr" />
          <label htmlFor="name_en" className="col-form-label">الاسم-انجليزي</label>
        </div>
      </div>
      <div className="col-12  col-md-4 form-floating mb-3">
        <div className="input-group ">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="nav-icon fas fa-image" /></span>
          </div>
          <input type="text" id="link" className="form-control" name="link" fdprocessedid="pz5bzu" />
          <label htmlFor="link" className="col-form-label">لينك</label>
        </div>
      </div>
      <div className="col-12  col-md-4 form-floating mb-3">
        <div className="input-group ">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="nav-icon fas fa-image" /></span>
          </div>
          <textarea type="text" id="desc_ar" className="form-control" name="desc_ar" defaultValue={""} />
          <label htmlFor="desc_ar" className="col-form-label">فقرة-عربي</label>
        </div>
      </div>
      <div className="col-12  col-md-4 form-floating mb-3">
        <div className="input-group ">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="nav-icon fas fa-image" /></span>
          </div>
          <textarea type="text" id="desc_en" className="form-control" name="desc_en" defaultValue={""} />
          <label htmlFor="desc_en" className="col-form-label">فقرة-انجليزي</label>
        </div>
      </div>
    </div>
  </div>
  {/* /.card-body */}
  <div className="card-footer float-left mt-2">
    <button className="btn btn-sm bg-secondary mr-1" type="reset" fdprocessedid="y5td0g">
      <i className="fas fa-undo" />
    </button>
    <button type="submit" onclick="this.disabled=true;this.form.submit();" className="btn btn-sm btn-outline-success ms-3" fdprocessedid="qnd4m9">
      <i className="fa fa-check " aria-hidden="true" />
    </button>
  </div>
  {/* /.card-footer */}
</form>
  )
}

export default SiteSlider