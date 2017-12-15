module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
<<<<<<< HEAD
  // module: {
  //   loaders:[
  //     {
  //       test: /\.js[x]?$/,
  //       exclude: /node_modules/,
  //       loader: 'babel-loader?presets[]=es2015&presets[]=react',
  //     },
  //   ]
  // }
=======
// 1
//   module: {
//     loaders:[
//       {
//         test: /\.js[x]?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader?presets[]=es2015&presets[]=react',
//       },
//     ]
//   },
// 2
>>>>>>> 8abf73b14638b51f3eee630895065a3e02c67081
  module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
<<<<<<< HEAD
}
=======
}  
>>>>>>> 8abf73b14638b51f3eee630895065a3e02c67081
};
