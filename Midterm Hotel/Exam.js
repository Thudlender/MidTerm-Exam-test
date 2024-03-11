class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = null;
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }

  getAccountType() {
    return this.accountType;
  }

  setAccount(accountType) {
    this.accountType = accountType;
  }

  toString() {
    return `[ name = ${this.name},
    address = ${this.address},
    email = ${this.email},
    phone = ${this.phone},
    accountType = ${this.accountType}]`;
  }
}

class Account extends Person {
    username = "";
    password = "";
    status = AccountStatus;
    constructor(username, password, status) {
        this.username = username;
        this.password = password;
        this.status = status;
    }

    login(username, password) {
        this.username = username;
        this.password = password;
        return this.login;
    }

    resetPassword(username, newPassword) {
        this.username = username;
        this.newPassword = newPassword;
    }
}

class Receptionist {
    createBooking() {
        return new RoomBooking();
    }
}

class Guest extends Person {
    roomBooking = [];
    constructor(name, address, email, phone, accountType) {
        super(name, address, email, phone, accountType);
    }

    addRoomBooking(roombooking) {
      this.roomBookings.push(roombooking);
    }
    //ตรวจสอบห้องว่าง
    // createBooking(reservationNumber, startDate, durationDays, room) {
    //     const isRoomAvailable = this.isRoomAvailable(room, startDate, durationDays);

        if (isRoomAvailable) {
          const booking = {
            reservationNumber, startDate, durationDays, room };
            this.addRoomBooking(booking);
            this.totalRoomBooking++;
            return booking;
        }
    }
    toString() {
      for (let i = 1; i < this.roomBooking.length; i++) {
        
      }
    }
}

class RoomBooking extends Person {
  reservationNumber = "";
  startDate = "";
  durationDays = 0;
  status = null;
  createBy = null;
  constructor(reservationNumber, startDate, durationDays, status, createBy) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.status = status;
    this.createBy = createBy;
  }

  getDetail(reservationNumber) {
    if ((reservationNumber = this.reservationNumber)) {
      return `Name: [${this.createBy.toString()}] \n Detail: [Reservation Number: ${reservationNumber}, Start Date: ${
        this.startDate
      }, Duration: ${this.durationDays}, Status: ${this.status}, Create by: ${
        this.createBy.name
      }]`;
    }
  }

  createBooking(reservationNumber, startDate, durationDays, guest) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.guest = guest;
    return new RoomBooking();
  }
}

class Notification extends Person {
    notificationId = 0;
    createOn = "";
    content = "";
    sender = Person;
    recipient = Person;
    constructor(notificationId, createOn, content, sender, recipient) {
        this.notificationId = notificationId;
        this.createOn = createOn;
        this.content = content;
        this.sender = Person;
        this.recipient = Person;
    }

    send(sender, recipient, content) {
        this.sender = sender;
        this.recipient = recipient;
        this.content = content;
        return true;
    }
}

class Room {
    roomNumber = "";
    style = null;
    status = RoomStatus;
    roomPrice = double;
    constructor(roomNumber, style, status, roomPrice) {
        this.roomNumber = roomNumber;
        this.style = style;
        this.status = status;
        this.roomPrice = roomPrice;
    }

    isRoomAvailable(roomNumber) {
        return {
          this.roomNumber === roomNumber && this.status === RoomStatus.AVAILABLE
        };
    }

    createRoom(roomNumber, style, status, price) {
        const room5 = new Room (roomNumber, style, status, price);

    }

    toString() {
      return `Room [${this.roomNumber}, ${this.style}, ${this.roomPrice}, ${this.status}]`;
    }
}

class Hotel {
    name = "";
    location = "";
    rooms = [];
    constructor(name, location) {
        this.name = name;
        this.location = location   
    }

    getRoom() {
        return this.rooms;
    }

    addnewRoom(room) {
        this.rooms.push(room);
    }

    toString() {
      let inHotel = "";
      for (let i = 0; i < this.rooms.length; i++) {
        inHotel += "/t" + `${this.rooms[i].toString()}` + "\n";
      }
      return `Hotel : ${this.name} ${this.location} \n ${inHotel}`;
    }
}

//Enum
class AccountType {
  static GUEST = ("guest");
  static RECEPTIONIST = ("receptionist");
  constructor(name) {
    this.name = name;
  }
}