// state = {
//   firstName: "John",
//   lastName: "Scchteman"
// }

// userInputHandler = (e) =>{
//   const input = e.target.value.split(" ");
//   console.log(input);
//   if(input[1]!==""){
//     this.setState({
//     firstName: input[0],
//     lastName: input[1]?input[1]:""
//     })
//   }else{
//     this.setState({
//       firstName: input[0],
//       lastName: input[1]?input[1]:" "
//       })
//   }
// }
// <UserInput name={this.state.lastName?this.state.firstName+" "+this.state.lastName:this.state.firstName} change={this.userInputHandler}/>
//         <UserOutput firstName={this.state.firstName} lastName={this.state.lastName} />
// state = {
//   text: "",
//   char: []
// }
// onChangeHandler = (event) =>{
//     this.setState({
//       text: event.target.value,
//       char: event.target.value.split("")
//     });
// };

// onClickHandler = (index) =>{
//   const chars = [...this.state.char];
//   chars.splice(index,1);
//   while(chars[chars.length-1]===" ")chars.pop();
//   this.setState({
//     text: chars.join(""),
//     char: chars
//   })
// }
// let text = this.state.text;

//         if(text.length>17){
//           text = "The Text is too long."
//         }
//         else if(text.length<=5 && text.length!=0){
//           text = "The Text is too short."
//         }
//         let gap =0;
//         let char = [];
//         if(text.length>0){
//           char = [...this.state.char];
// }
// <UserInput change={this.onChangeHandler} val={this.state.text}/>
//             <ValidComponent text={text}/>
//             {char.filter((ele)=>{ return ele!==" ";}).map((ele,i)=>{if(ele===" ")gap++;return(<p onClick={this.onClickHandler.bind(this,i+gap)}  key={ele+i}>{ele}</p>);})}
