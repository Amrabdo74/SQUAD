import React from 'react'

const Comment = () => {
  return (
<div className="row">
  <div className="col-lg-12">
    <div className>
      {/* /.card-header */}
      {/* form start */}
    </div>
    <div className="row mt-1">
      <div className="col-sm-12 col-lg-12">
        <div className="card card-info border border-1 mt-3 bg-light">
          <div className="card-header">
            <h3 className="card-title " style={{float: 'right', fontWeight: 'bold'}}>تعلـــــــيقات الزوار</h3>
          </div>
          {/* /.card-header */}
          <div className="card-body">
            <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
              <div className="row">
                <div className="col-sm-12">
                  <table id="example1" className="table table-bordered table-striped dataTable dtr-inline" aria-describedby="example1_info">
                    <thead>
                      <tr>
                        <td>#</td>
                        <th>الأسم</th>
                        <th>المنتج</th>
                        <th>الإيميل</th>
                        <th>ملاحظات</th>
                        <th>التقييم</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd">
                      </tr><tr>
                        <td className="text-center">1</td>
                        <td className="text-start">mahmoud</td>
                        <td className="text-start">مناديل مكتب</td>
                        <td className="text-start">admin@gmail.com</td>
                        <td className="text-start">جيد جدااا</td>
                        <td className="text-start">5</td>
                        <td>
                          <div className="d-flex">
                            <a href="http://localhost/folsscap/ar/visitor/delete-client-messages/2" type="submit" onclick="return confirm('Are you sure?')" className="btn mx-1 btn-sm btn-danger"><i className="fas fa-trash-alt" /></a>
                          </div>
                        </td>
                      </tr>
                      <tr className="odd">
                      </tr><tr>
                        <td className="text-center">2</td>
                        <td className="text-start">adham</td>
                        <td className="text-start">مقلب قهوة خشبي ساخن وبارد</td>
                        <td className="text-start">adham@najezsoft.com</td>
                        <td className="text-start">ممتاز</td>
                        <td className="text-start">5</td>
                        <td>
                          <div className="d-flex">
                            <a href="http://localhost/folsscap/ar/visitor/delete-client-messages/1" type="submit" onclick="return confirm('Are you sure?')" className="btn mx-1 btn-sm btn-danger"><i className="fas fa-trash-alt" /></a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* /.card-body */}
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Comment