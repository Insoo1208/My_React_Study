import Dialog from "./Dialog";

function Dialogcontainer() {
  return (
    <>
    {/* Welcomedialog */}
    <Dialog 
      title='Welcome!'
      message='Thanks to visit our spaceship!'
      color='blue'
    />

    {/* AlertDialog */}
    <Dialog 
      title='Warning!'
      message='Staff Only.'
      color='red'
    />
    </>
  );
}

export default Dialogcontainer;