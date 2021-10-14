module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: theme=>(
        {
          'pastel-blue':'#68bbe3',
        }
      ),
      backgroundColor: theme=>(
        {
          'pastel-blue':'#68bbe3',
        }
      ),
      textColor:{
        'pastel-blue':'#68bbe3',
      }
    },
  },
  variants: {
    extend: {backgroundColor: ['active'],},
  },
  plugins: [],
}
