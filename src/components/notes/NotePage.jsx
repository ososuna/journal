import { NotesAppBar } from "./NotesAppBar"

export const NotePage = () => {
  return (
    <div className="notes__main-content">
      
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="what happened today"
          className="notes__textarea"
        >
        </textarea>

        <div className="notes__image">
          <img
            src="https://i.pinimg.com/564x/15/50/4a/15504a05302d421fa33416aad5784983.jpg"
            alt="rengoku"
          />
        </div>

      </div>

    </div>
  )
}
