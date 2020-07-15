import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer/rootReducer';

const initialState = {
  init: true,
  searchText: '',
  recipes: {
    // contains the recipes info for list component
    loading: false,
    data: [
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 869354,
      //   title: 'No-Bake Coconut Protein Bites',
      //   image: '',
      //   imageType: 'jpg',
      // },
    ], // [{ id: number, title: string, image: string URL, imageType: string }...]
    error: '',
  },
  recipe: {
    loading: false,
    data: {
      // id: 869354,
      // title: 'test title',
      // summary:
      //   "You can never have too many side dish recipes, so give No-Bake Coconut Protein Bites a try. For 48 cents per serving, this recipe covers 3% of your daily requirements of vitamins and minerals. This recipe makes 14 servings with 95 calories, 3g of protein, and 3g of fat each. 1 person has made this recipe and would make it again. Head to the store and pick up vega performance protein vanilla, coconut, medjool dates, and a few other things to make it today. From preparation to the plate, this recipe takes around 5 minutes. It is a good option if you're following a gluten free and dairy free diet. All things considered, we decided this recipe deserves a spoonacular score of 28%. This score is not so amazing. Try No Bake Protein Bites, Pumpkin Pie Protein No-Bake Bites, and No-Bake Honey Butter Protein Bites for similar recipes.",
      // image:
      //   '/home/pramit/myDrive/dev/portfolio/foodToFork-react/src/Assets/image/image12.png',
      // ingredients: [
      //   '2 large egg whites',
      //   '8 large eggs',
      //   '1/2 cup granulated sugar',
      //   '2 large egg whites',
      //   '8 large eggs',
      //   '1/2 cup granulated sugar',
      //   '2 large egg whites',
      //   '8 large eggs',
      //   '1/2 cup granulated sugar',
      // ],
      // instructions: [
      //   {
      //     instructionHeading: '',
      //     steps: [
      //       'Place all ingredients in a food processor or high-powered blender.',
      //       'Mix until it forms a dough.',
      //       'Roll into balls.Store in the fridge or freezer.',
      //     ],
      //   },
      // ],
      // sourceUrl: 'https://runningonrealfood.com/no-bake-coconut-protein-bites/',
      // sourceName: 'The Shiksa in the Kitchens',
      // servings: 4,
      // readyInMinutes: 45,
      // preparationMinutes: 120,
      // cookingMinutes: 45,
    },
    error: '',
  },
};

export const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
