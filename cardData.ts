const cardData = [
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate ex at lacus vehicula vestibulum. Nulla auctor, purus at fringilla pulvinar, metus magna euismod justo, et fermentum libero risus ac felis. Integer quis lacinia velit. Nam rhoncus, mauris sed tincidunt aliquam, odio purus feugiat odio, in scelerisque lectus nunc in felis. Duis auctor ligula in eros hendrerit sodales. Nam vel eleifend justo. Ut non dolor in libero euismod eleifend. Ut sed dolor nec tortor faucibus auctor. Sed dapibus, metus quis fermentum elementum, dui quam lobortis mauris, non ultricies lorem ligula quis odio. In hac habitasse platea dictumst. Mauris varius augue id ex auctor rutrum. Proin sollicitudin eleifend ex at scelerisque. Sed placerat mauris magna, eget dapibus turpis convallis et. Sed sollicitudin, dolor a efficitur blandit, turpis lectus scelerisque dolor, vel gravida purus dolor non dolor.",
      name: "Shubham Singh",
      date: "6 July 2024",
      rating: 5
    },
    {
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed auctor odio eu metus fermentum faucibus. Nunc auctor justo nec leo volutpat, et dapibus elit fermentum. Suspendisse potenti. Pellentesque vitae velit sed felis condimentum dictum at id justo. Nunc a justo odio. Quisque pellentesque tellus ac sem auctor, eu pellentesque lacus tincidunt. Sed sit amet malesuada odio. Fusce dignissim semper odio a maximus. Nulla facilisi. Donec eget magna convallis, consequat erat non, feugiat purus. Cras consequat fringilla arcu, eget semper erat bibendum quis. Proin iaculis, nunc at accumsan bibendum, eros ante posuere est, sit amet facilisis dolor sem a nunc.",
      name: "Shubham Singh",
      date: "6 July 2024",
      rating: 3
    },
    {
      imageUrl: "https://example.com/image3.jpg",
      description: "Integer quis vehicula augue. Nulla a ligula luctus, rutrum urna at, suscipit magna. Proin id mauris nec ex consectetur scelerisque. Maecenas feugiat mi non consequat sodales. Donec sagittis consequat eros, eget malesuada lorem. Nulla facilisi. Sed ac felis velit. Cras luctus arcu sed arcu aliquam bibendum. Etiam in volutpat leo, sit amet scelerisque lacus. Nunc sed libero at sem faucibus luctus in vel turpis. Suspendisse non justo et felis lacinia finibus eu non urna. In nec sodales arcu. Mauris elementum viverra nisi, nec scelerisque nunc blandit sed. Aenean a arcu sit amet elit rhoncus semper. Donec eget orci sem. Etiam vestibulum consequat mi, ac congue orci efficitur in.",
      name: "Shubham Singh",
      date: "6 July 2024",
      rating: 5
    },
    {
      description: "Vivamus aliquet nec nisi a posuere. Curabitur vehicula dignissim massa, id sodales magna gravida quis. Suspendisse potenti. Nulla facilisi. Aliquam vitae nisi sed magna finibus fermentum ac quis urna. Nullam hendrerit sapien eu nisi dictum, vitae lobortis velit ultricies. Nam tristique urna at nulla laoreet scelerisque. Nullam aliquet purus sit amet augue lacinia rutrum. Mauris pellentesque libero nec neque fermentum, ac ultrices lorem fermentum. Cras tempor lobortis mi, ac eleifend quam vestibulum vel. Pellentesque nec malesuada libero. Curabitur rutrum libero at velit varius interdum. Quisque ac posuere sapien. Cras eget ante nec lorem lobortis mollis. Suspendisse potenti.",
      name: "Shubham Singh",
      date: "6 July 2024",
      rating: 4
    },
    {
      description: "Sed eget magna et justo varius euismod. Vestibulum feugiat est at libero tincidunt, et fermentum ipsum vestibulum. Quisque eu sagittis eros. Cras ullamcorper nisl et leo laoreet mollis. Suspendisse scelerisque, risus id consequat molestie, lectus arcu accumsan nisl, non vestibulum elit nulla nec nisi. Quisque eget erat a tellus interdum facilisis. Nulla at velit fringilla, placerat est non, bibendum metus. Duis viverra semper tempor. Duis pellentesque, mauris nec laoreet condimentum, est felis aliquam purus, a interdum ante odio sed enim. Sed malesuada dolor nec leo congue vehicula. Integer convallis laoreet elit nec facilisis. Curabitur non lacus nulla. Vestibulum eget libero sed lorem eleifend eleifend. Ut dictum metus at mi tristique, ac euismod libero finibus.",
      name: "Shubham Singh",
      date: "6 July 2024",
      rating: 5
    },
    {
      description: "Proin quis nulla a urna elementum ultricies vitae in ligula. Quisque at ligula justo. Duis tristique sem in semper suscipit. Nulla facilisi. In vel mi sem. Vestibulum vel nibh eu leo efficitur finibus sit amet at ex. Proin commodo orci sit amet tortor iaculis blandit. Nullam ac est eu mi pellentesque tempus. Suspendisse ultricies varius lorem, nec sodales lorem vehicula ac. Nam et purus id mi egestas bibendum. Morbi id elit nisi. Nam volutpat eleifend elit, ut lacinia nisi ullamcorper eget. Proin mollis dolor nec leo auctor sagittis. Pellentesque sit amet erat in eros ultricies pharetra.",
      name: "Shubham Singh",
      date: "6 July 2024",
      rating: 5
    },
    {
      description: "Donec vehicula ultricies sapien, et scelerisque nisi laoreet ac. Phasellus ac est nec sem imperdiet tincidunt at nec lectus. Aliquam semper erat a risus condimentum aliquam. Donec vitae sapien a nulla vehicula egestas. Nulla et magna metus. Nunc pretium malesuada justo. Duis ac accumsan orci. Mauris suscipit lorem vitae malesuada posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus non orci id tellus feugiat vehicula.",
      name: "Shubham Singh",
      date: "6 July 2024",
      rating: 2
    },
    {
      description: "Morbi lacinia, eros id ultrices aliquet, nunc erat fermentum lorem, nec aliquet ipsum odio in est. Ut in ex ultricies, congue nisl ac, tempus velit. Integer aliquam sit amet nisi vitae fermentum. Ut vel elit orci. Ut sed urna ultricies, consequat turpis at, congue nunc. Cras varius gravida augue, sed bibendum ipsum consectetur id. Fusce tristique mauris vitae bibendum congue. Vestibulum quis lectus at velit pellentesque venenatis. Sed aliquam, est eu laoreet dictum, lorem ligula gravida ante, sit amet tempor metus dolor et nunc. Curabitur lacinia purus eu risus feugiat, a tincidunt libero pellentesque. Donec id nisi ut magna laoreet pharetra. Nullam molestie augue ac elit vehicula, in tristique libero venenatis.",
      name: "Shubham Singh",
      date: "6 July 2024",
      rating: 1
    },
    {
      description: "Pellentesque sit amet risus at nisl mollis rutrum sit amet et mauris. Nulla congue orci a erat rutrum, id dictum ligula tempor. Duis placerat, lectus vitae efficitur euismod, ligula purus vestibulum ante, ac fermentum enim nisl ac dui. Pellentesque sit amet magna est. Nam tempus pretium lorem, id scelerisque metus tincidunt sit amet. Mauris quis odio a erat rutrum elementum nec a velit. Nam lobortis mi at turpis tincidunt, sed lacinia enim ultricies. Maecenas efficitur elit a ex condimentum ultricies. Nullam bibendum eget odio non feugiat. Maecenas rhoncus mauris non arcu pharetra, at accumsan arcu dictum. Ut in nunc quis ante malesuada pharetra. Etiam dignissim elit quis nunc mattis, a mollis erat posuere. Fusce at interdum dolor, eu tincidunt turpis. Phasellus posuere tincidunt felis, et egestas turpis.",
      name: "Shubham Singh",
      date: "6 July 2024",
      rating: 5
    },
    {
      description: "Quisque scelerisque velit a libero rutrum, et convallis turpis accumsan. In vitae pretium nisi. Curabitur ultrices sapien non quam aliquam, sit amet lacinia elit pharetra. Sed dictum fermentum nulla. Vestibulum ornare consectetur varius. Fusce consequat eu odio in lacinia. Phasellus et fringilla neque. Curabitur et neque id lacus pharetra auctor. Cras vitae aliquam purus, et venenatis erat. Duis non tincidunt nulla, in tristique arcu. Maecenas lacinia sem vel risus fringilla, id molestie sapien rhoncus.",
      name: "Shubham Singh",
      date: "6 July 2024",
      rating: 5
    },
    
  ];
  
  export default cardData;
  