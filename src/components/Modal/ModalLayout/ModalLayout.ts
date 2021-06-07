import './ModalLayout.css';

export const ModalLayout = `
  <div class="modal">
    <div class='modal-1'
      <form action="" method="">
        <div class='modal-header'>
          <span>Registr new Player</span>
        </div>

        <div class="modal-content">
          <div class='player-info'>
            <div class='player-info__item'>
              <input
                type="text"
                class="form-control form-name"
                maxlength='30'
                placeholder='Name'
              >              
            </div>

            <div class='form-tooltip'>
              Your name and surname:<br>
                -cannot be empty<br>
                -cannot consist of numbers<br>
                -cannot contain service characters
              </div>

            <div class='player-info__item'>
              <input
                type="text"
                class="form-control form-sname"
                maxlength='30'
                placeholder='Surname'
              >
            </div>

            <div class='player-info__item'>
              <input
                type="email"
                class="form-control form-email"
                placeholder='Email'
                maxlength='30'
              >
            </div>

            <div class='form-tooltip-email'>
              Your email:<br>
                -cannot be empty<br>
                -must comply with the standard<br> email generation rule [RFC]
              </div>
          </div>

          <div class='player-modal-icon'>
          </div>
        </div>

        <div class='form-btns'>
          <button type="submit" class="btn btn-primary btn-secondary btn-add-user btn-form">add user</button>
          <button class="btn btn-secondary btn-close-form btn-form">cancel</button>        
        </div>
      </form>
    </div>
  </div>
`;
