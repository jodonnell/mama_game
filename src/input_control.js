class InputControl {
    constructor() {
        this.left = 0;
        this.right = 0;
        this.down = 0;
        this.up = 0;
        this.x = 0;
        this.z = 0;
        this.getKey();
    }

    get LEFT_KEY() {
        return 37;
    }

    get RIGHT_KEY() {
        return 39;
    }

    get UP_KEY() {
        return 38;
    }

    get DOWN_KEY() {
        return 40;
    }

    get Z_KEY() {
        return 90;
    }

    get DVORAK_Z_KEY() {
        return 186;
    }

    get DVORAK_Z_KEY_FIREFOX() {
        return 59;
    }

    get X_KEY() {
        return 88;
    }

    get DVORAK_X_KEY() {
        return 81;
    }

    getKey() {
        document.addEventListener('touchstart', (e) => {
            e.preventDefault();
            let touch = e.touches[0];

            if (touch.pageX < 100) {
                this.pressLeft();
            }
            else if (touch.pageX >= 100 && touch.pageX < 400) {
                this.pressRight();
            }
            else if (touch.pageX >= 400 && touch.pageX < 850) {
                this.pressJump();
            }
            else if (touch.pageX >= 850) {
                this.pressBubble();
            }
        }, false);

        let touchEnd = (e) => {
            e.preventDefault();

            this.releaseLeft();
            this.releaseRight();
            this.releaseJump();
            this.releaseBubble();
        };

        document.addEventListener('touchend', touchEnd, false);
        document.addEventListener('touchcancel', touchEnd, false);

        let keydown = (event) => {
            switch (event.which) {
            case this.LEFT_KEY:
                this.pressLeft();
                break;
            case this.RIGHT_KEY:
                this.pressRight();
                break;
            case this.UP_KEY:
                this.pressUp();
                break;
            case this.DOWN_KEY:
                this.pressDown();
                break;
            case this.Z_KEY:
                this.pressJump();
                break;
            case this.DVORAK_Z_KEY:
                this.pressJump();
                break;
            case this.DVORAK_Z_KEY_FIREFOX:
                this.pressJump();
                break;
            case this.X_KEY:
                this.pressBubble();
                break;
            case this.DVORAK_X_KEY:
                this.pressBubble();
                break;
            }
        };

        let keyup = (event) => {
            switch (event.which) {
            case this.LEFT_KEY:
                this.releaseLeft();
                break;
            case this.RIGHT_KEY:
                this.releaseRight();
                break;
            case this.DOWN_KEY:
                this.releaseDown();
                break;
            case this.UP_KEY:
                this.releaseUp();
                break;
            case this.Z_KEY:
                this.releaseJump();
                break;
            case this.DVORAK_Z_KEY:
                this.releaseJump();
                break;
            case this.DVORAK_Z_KEY_FIREFOX:
                this.releaseJump();
                break;
            case this.X_KEY:
                this.releaseBubble();
                break;
            case this.DVORAK_X_KEY:
                this.releaseBubble();
                break;
            }
        };

        document.addEventListener('keydown', keydown, false);
        document.addEventListener('keyup', keyup, false);
    }

    pressLeft() {
        this.left = 1;
    }

    pressRight() {
        this.right = 1;
    }

    pressUp() {
        this.up = 1;
    }

    pressDown() {
        this.down = 1;
    }

    pressJump() {

        this.z = 1;
    }

    pressBubble() {
        this.x = 1;
    }

    releaseLeft() {
        this.left = 0;
    }

    releaseRight() {
        this.right = 0;
    }

    releaseDown() {
        this.down = 0;
    }

    releaseUp() {
        this.up = 0;
    }

    releaseJump() {
        this.z = 0;
    }

    releaseBubble() {
        this.x = 0;
    }
}

export default InputControl;
