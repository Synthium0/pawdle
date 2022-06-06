import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

// TODO: make a limiter per ip address
// and make a websocket server to recieve the address
// then, in App.tsx, make it send 100 PAW to that address when you get the answer correct




export function PawInput() {
  return (
      
     <form>
         <label>
             PAW Address: { }
             <input type="text" name="Address" />
         </label>
         <input type="button" value="Submit" />
         <label id="AfterMessage"> </label>
         <script>
             button.addEventListener('click', updateButton);

         </script>
     </form>
    

  );
}
