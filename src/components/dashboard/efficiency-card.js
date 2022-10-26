export default function EfficiencyCard({color, text, number}){

  return(
    <div className="card efficiency-card d-flex align-items-center justify-content-center flex-column" style={{background: color}}>
      <h3 style={{fontWeight: "bold"}} className="text-center">
        {number}
      </h3>
      <p className="text-center">{text}</p>
    </div>
  )
}