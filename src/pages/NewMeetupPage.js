
import NewMeetupForm from "../component/meetups/NewMeetupForm";
import AllMeetupsPage from "./AllMetups";



function NewMeetupPage() {
  
 
  

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-53f88-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
    window.location.reload(true)

    });
  }

  return (
    <section>
      <AllMeetupsPage />
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
