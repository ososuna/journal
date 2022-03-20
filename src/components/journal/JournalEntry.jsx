export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://i.pinimg.com/564x/15/50/4a/15504a05302d421fa33416aad5784983.jpg)'
        }}
      >

      </div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          a new day
        </p>
        <p className="journal__entry-content">
          lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>monday</span>
        <h4>06</h4>
      </div>
    </div>
  )
}
