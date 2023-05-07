let words = {
  data: [
    {
      productName: "Rails",
      category: "R",
      price: "a bar or series of bars, typically fixed on upright supports, serving as part of a fence or barrier or used to hang things on.",
      image: "Rails.jpg",
    },
    {
      productName: "B",
      category: "B",
      price: "49",
      image: "short-skirt.jpg",
    },
    {
      productName: "D",
      category: "D",
      price: "99",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "A",
      category: "A",
      price: "29",
      image: "knitted-top.jpg",
    },
    {
      productName: "C",
      category: "C",
      price: "129",
      image: "black-leather-jacket.jpg",
    },
    {
      productName: "B",
      category: "B",
      price: "89",
      image: "pink-trousers.jpg",
    },
    {
      productName: "Mikael Guevarra",
      category: "M",
      price: "- BSME-4D Class Mayor",
        image: "Mikael-Guevarra.jpg",
    },
    {
        productName: "Mechanical spring",
      category: "M",
        price: "Mechanical spring - In their simplest form, mechanical springs such as coil springs, leaf springs, volute springs and compression springs are elastic devices that store mechanical potential energy when deformed by compression, extension or torsion.",
        image: "Mechanical-spring.jpg",
    },
    {
      productName: "Fish Plate",
      category: "F",
      price: "Fish Plate-a metal or wooden plate that is bolted to the sides of the ends of two rails or beams, to join them. A fishplate is a flat piece of metal joining one rail or beam to another",
      image: "Fish-Plates.jpg",
    },
    {
      productName: "Rail joint ",
      category: "R",
      price: "a bar or series of bars, typically fixed on upright supports, serving as part of a fence or barrier or used to hang things on.",
      image: "Rail-joints.jpg",
    },
    {
            productName: "Guard rail",
            category: "G",
            price: "are linear motion methods used to optimize material, part, and assembly movement. These highly efficient rail systems are machined, and precision designed for smooth circulation.t is bolted to the sides of the ends of two rails or beams, to join them. A fishplate is a flat piece of metal joining one rail or beam to another",
            image: "Guard-Rail.jpg",
    },
    {
            productName: "Gears",
            category: "G",
            price: "a rotating circular machine part having cut teeth or, in the case of a cogwheel or gearwheel, inserted teeth (called cogs), which mesh with another (compatible) toothed part to transmit (convert) torque and speed. The basic principle behind the operation of gears is analogous to the basic principle of levers. Gears serve two main purposes: increasing speed or increasing force.",
            image: "Gears.jpg",
    },
    {
            productName: "Sheaves",
            category: "S",
            price: "A wheel with an open groove that a rope or cable fits around so it can rotate around the exterior. One end of the cable is attached to an item that needs to be moved, while the other is attached to a fixed object, like the base of a crane.",
            image: "sheaves.jpg",
    },
    {
            productName: "Grooving",
            category: "G",
            price: "a turning operation that creates a narrow cut, a groove in the workpiece. The size of the cut depends on the width of the cutting tool. Multiple tool passes are necessary to machine wider grooves. There are two types of grooving operations, external and face grooving.",
            image: "Grooving.jpg",
    },
    {
            productName: "Keys",
            category: "K",
            price: "a machine element used to connect a rotating machine element to a shaft. The key prevents relative rotation between the two parts and may enable torque transmission.",
            image: "keys.jpg",
    },
    {
            productName: "Worm gear",
            category: "W",
            price: "a gear consisting of a shaft with a spiral thread that engages with and drives a toothed wheel. It changes the rotational movement by 90 degrees, and the plane of movement also changes due to the position of the worm on the worm wheel (or simply 'the wheel'). They are typically comprised of a steel worm and a brass wheel.",
            image: "worm-gears.jpg",
    },
    {
            productName: "Hydraulic Elevators",
            category: "H",
            price: "Hydraulic systems don't use overhead hoisting machinery. Instead, these elevators use the compression of fluids to generate movement. The elevator cab is lifted by an electric motor that pumps oil into the cylinder to move the piston.",
            image: "hydraulic-elevators.jpg",
    },
    {
            productName: "Levers",
            category: "L",
            price: "consists of a beam or rod, which pivots on a fulcrum. The purpose is to lift weights with less effort. A good example of a lever is children on opposite ends of a seesaw, lifting each other's weight up and down.",
            image: "lever.jpg",
    },
    {
            productName: "Wire Ropes",
            category: "W",
            price: "used dynamically for lifting and hoisting in cranes and elevators, and for transmission of mechanical power. Wire rope is also used to transmit force in mechanisms, such as a Bowden cable or the control surfaces of an airplane connected to levers and pedals in the cockpit.",
            image: "wire-ropes.jpg",
    },
    {
            productName: "Beams",
            category: "B",
            price: "a structural element that primarily resists loads applied laterally to the beam's axis (an element designed to carry primarily axial load would be a strut or column). Its mode of deflection is primarily by bending. The loads applied to the beam result in reaction forces at the beam's support points.",
            image: "Beams.jpg",
    },
    {
            productName: "Bracket",
            category: "B",
            price: "any intermediate component for fixing one part to another, usually larger, part. What makes a bracket a bracket is that it is intermediate between the two and fixes the one to the other.",
            image: "Bracket.jpg",
    },
    {
            productName: "Car Frame",
            category: "C",
            price: "car’s structural support system. Made of steel or aluminum, the purpose of a car frame is to: Support all mechanical components of the car. Support the car body, or shape.",
            image: "Car-Frame.jpg",
    },
    {
            productName: "Terminal Stopping Device",
            category: "T",
            price: "a device or devices to slow down and stop a hoist car automatically at or near a terminal landing, independently of the functioning of the operating device.",
            image: "Terminal-Stopping-Device.jpg",
    },
    {
            productName: "Car Door",
            category: "C",
            price: "a type of door opening, typically hinged on its front edge, but sometimes attached by other mechanisms such as tracks, for entering and exiting a vehicle.",
            image: "Car-Door.jpg",
    },
    {
            productName: "Machine Room Elevator",
            category: "M",
            price: "shall be located adjacent to the elevator hoistway and pit area at the lowest level of elevator travel. Traction elevator machine rooms shall be located directly over the hoistway of the elevator served by that equipment.",
            image: "Machine-Room.jpg",
    },
    {
            productName: "Dumb Waiter Cars",
            category: "D",
            price: "a small freight elevator used to transport food or dirty dishes from meals between floors in a house or other building.",
            image: "Dumbwaiter-Cars.jpg",
    }
  ],
};

for (let i of words.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
