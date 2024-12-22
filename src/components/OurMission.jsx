const OurMission = ({ icon, title, desc, ourcard, titleStyle, cardDes, feed }) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
      <div className={`${`${ourcard} p-3`} h-100 `} data-aos={`${feed}`}>
        {icon}
        <h3 className={`${titleStyle} fs-3`}>
          {title}
        </h3>
        <p className={`${cardDes}`}>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default OurMission