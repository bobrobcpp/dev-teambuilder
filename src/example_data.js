 var EXAMPLE_ARR = [
    {
        name: 'TeamBuilder for devs',
        roles: [
                'Front-End Web Developer with React',
                'Pythong Developer with Flask'
              ],
        tags: [
                'CSS3',
                'JavaScript',
                'React',
                'Python',
                'PostgreSQL',
                'Flask'
              ],
        description: 'Something about this project',
        creator: {
                    name: 'Blah',
                    email: 'example@example.de'
            }

    },
        {
        name: 'Second Project',
        roles: [
                'Front-End Web Developer with React',
                'Pythong Developer with Flask'
              ],
        tags: [
                'CSS3',
                'JavaScript',
                'React',
                'Python',
                'PostgreSQL',
                'Flask'
              ],
        description: 'Something about this project',
        creator: {
                    name: 'Blah',
                    email: 'example@example.de'
            }

    }
]

// This makes sure the data is exported in node.js —
// `require("./path/to/ancestry.js")` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = EXAMPLE_ARR;