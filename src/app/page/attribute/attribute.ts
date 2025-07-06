import { Component, HostListener } from '@angular/core'; 
import { FontType } from '../../directive/role';

@Component({
  selector: 'app-about',
  imports: [ FontType],
  template: `<h1 ><u>About Me</u></h1>
    <p >
      I’m a <b >frontend developer</b> and
      <b fontType font="bold">freelancer</b> passionate about building
      beautiful, responsive, and user-friendly web interfaces.
    </p>
    <p>
      I specialize in <b><u fontType font="underline">HTML</u></b
      >, <b><u fontType font="underline">CSS</u></b
      >, <b><u fontType font="underline">JavaScript</u></b
      >, and modern frameworks like <b>React</b> and <b>Vue</b>. I enjoy turning
      complex problems into simple, elegant solutions.
    </p>
    <p>
      <i fontType font="italic"
        >I believe that great design is just as important as great code</i
      >, and I’m always exploring <u>new technologies</u> and tools to enhance
      user experience.
    </p>
    <p>
      Whether it’s building from scratch or bringing life to an existing
      project, I’m ready to help.
      <b
        ><i><u>Let’s create something amazing together!</u></i></b
      >
    </p>`,
  styleUrl: './about.scss',
})
export class About {
  constructor() {}

  @HostListener('window:resize', ['$event'])
  windowEvent(event: any) {
    console.log(event);
  }

  @HostListener('window:keydown.shift.i', ['$event'])
  info(event: any) {
    alert('You are in about page');
  }
}
