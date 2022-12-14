import { useState } from "react";
import "./App.css";
import EventBubblingBlockedPopup from "./components/EventBubblingBlockedPopup";
import EventBubblingUnblockedPopup from "./components/EventBubblingUnblockedPopup";

function App() {
  const [isEventBubblingBlockedPopup, setIsEventBubblingBlockedPopup] =
    useState(false);
  const [isEventBubblingUnblockedPopup, setIsEventBubblingUnblockedPopup] =
    useState(false);

  const openEventBubblingBlockedPopup = () => {
    setIsEventBubblingBlockedPopup(true);
  };
  const closeEventBubblingBlockedPopup = () => {
    setIsEventBubblingBlockedPopup(false);
  };

  const openEventBubblingunBlockedPopup = () => {
    setIsEventBubblingUnblockedPopup(true);
  };
  const closeEventBubblingunBlockedPopup = () => {
    setIsEventBubblingUnblockedPopup(false);
  };

  return (
    <main className="home">
      {isEventBubblingBlockedPopup && (
        <EventBubblingBlockedPopup
          closePopup={closeEventBubblingBlockedPopup}
        />
      )}
      {isEventBubblingUnblockedPopup && (
        <EventBubblingUnblockedPopup
          closePopup={closeEventBubblingunBlockedPopup}
        />
      )}
      <h1>Event Bubbling</h1>
      <div>
        <p>
          <strong>JavaScript Event Bubbling - EN</strong>
          <br />
          Event bubbling is a type of event propagation where the event triggers
          the innermost target element first and then repeatedly triggers the
          ancestors of the target element in the same nesting hierarchy until it
          reaches the outermost DOM element or document object. It is a way of
          handling events in the browser. Wikipedia (English)
        </p>
        <p>
          In this example, there is a form in the 1st popup, and any click
          outside of the form causes the popup to be closed by the onClick event
          assigned to the popup.
        </p>
        <p>
          In the 2nd example, there is a form that does not have the onClick
          event set, and in this case, wherever you click on the screen, the
          popup will be closed.
        </p>
        <p>
          <pre>Event.stopPropagation()</pre>
          <q>
            The stopPropagation() method of the Event interface prevents further
            propagation of the current event in the capturing and bubbling
            phases. It does not, however, prevent any default behaviors from
            occurring; for instance, clicks on links are still processed.
          </q>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation">
            (developer.mozilla.org)
          </a>
        </p>
      </div>

      <div>
        <p>
          <strong>JavaScript Event Bubbling - TR</strong>
          <br />
          Olay k??p??rme, olay??n ilk ??nce en i??teki hedef ????eyi tetikledi??i ve
          daha sonra ayn?? i?? i??e yerle??tirme hiyerar??isindeki hedef ????enin
          atalar??n?? en d????taki DOM ????esine veya belge nesnesine ula??ana kadar
          art arda tetikledi??i bir t??r olay yay??l??m??d??r. Olaylar??n taray??c??da
          ele al??nmas??n??n bir yoludur. Wikipedia (??ngilizce)
        </p>
        <p>
          Bu ??rnekte 1. popupda bir form var ve form d??????nda t??klanan herhangi
          bir yer popupun kapanmas??n?? sa??l??yor bunu sa??layan ??ey popupa atanm????
          olan onClick event'?? d??r
        </p>
        <p>
          2. ??rnekte onClick event?? atanmam???? bir form var ve bu durmda ekranda
          nerye t??klarsan??z t??klay??n popup kapanacakt??r.
        </p>
        <p>
          <pre>Event.stopPropagation()</pre>
          <q>
            Event arabiriminin stopPropagation() y??ntemi, ge??erli olay??n
            yakalama ve k??p??rme a??amalar??nda daha fazla yay??lmas??n?? ??nler.
            Ancak, herhangi bir varsay??lan davran??????n olu??mas??n?? engellemez;
            ??rne??in, ba??lant??lara yap??lan t??klamalar hala i??lenir.
          </q>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation">
            (developer.mozilla.org)
          </a>
        </p>
      </div>

      <button onClick={openEventBubblingBlockedPopup} className="openBtn">
        Open popup (with stopPropagation)
      </button>
      <button onClick={openEventBubblingunBlockedPopup} className="openBtn">
        Open popup (without stopPropagation)
      </button>
    </main>
  );
}

export default App;
