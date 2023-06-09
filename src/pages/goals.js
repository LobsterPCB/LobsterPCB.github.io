import React from "react";
import Footer from "../components/Footer";

const Goals = () => {
  return (
    <div>
      <div className="header-padding"></div>
      <div className="content">
        <h1>Project Goals</h1>
        <h4>What do we aim to achieve?</h4>
        <div className="text-boxes">
          <div>
            <h3>What we are trying to build</h3>
            <p>
              Our goal is to create a user-friendly, plug-and-play 2-layer rapid
              pcb prototyping for office use. Our ideal machine will be as
              simple to use as a 3D printer - just load the material, press go,
              and return for your finished PCB.
            </p>
          </div>
          <div>
            <h3>Doesn’t this already exist?</h3>
            <p>
              Yes and No. While there are many wonderful rapid prototyping
              solutions for PCBs, none of them quite check all of the boxes we
              would expect out of our ideal solution. While many existing
              products can produce great results, we aim to create a true ‘set
              it and forget it’ solution, and we haven’t quite seen anything
              like this yet.
            </p>
          </div>

          <div>
            <h3>Avoiding obscure/proprietary consumables</h3>
            <p>
              This was another primary design goal of ours. Many machines we
              have seen require obscure or proprietary consumables, which are
              sometimes sold at high markups because of this fact. This is not
              unique to PCB prototyping, it is seen in 3D printing and many
              other tools. From the beginning we based our design around the use
              of common materials, so it will only require copper-clad FR4 and
              bare copper wire.
            </p>
          </div>
          <div>
            <h3>What we plan to do differently</h3>
            <p>
              Many current market solutions require a great deal of attention
              from the user, which greatly reduces the usefulness of the
              machines in our opinion. Things like drill bit changes, board
              flipping, and manual via installation may be trivial tasks, but
              the time they require of the user adds up and can take away
              valuable time that would have been better spent creating different
              designs. This is what we aim to do better. Our current prototype
              will have no manual interactions aside from at the start and end
              of the process - when you load and unload your material. That
              means no need for drill bit changes, manual via installation, or
              other babysitting of the machine in any form.
            </p>
          </div>
          <div>
            <h3>Prototype vs future iterations</h3>
            <p>
              The prototype we are working on currently is mainly designed to
              showcase our novel via prototyping process. As such many aspects
              of the machine in it’s current form were designed to simplify
              design rather than to be practical for a commercial product. Any
              future iterations of the machine will likely use a similar
              workflow for producing traces and via on a fresh board, however
              many aspects will likely be changed to optimize for things like
              build volume, reliability, and cost.
            </p>
          </div>
          <div>
            <h3>Noise, Mess, Smell</h3>
            <p>
              One thing that we do aim to tacke with this prototype is the issue
              of noise, mess, and smell. Obviously for a machine meant to be
              used in an office environment, these things are undesirable.
              Because of this, even in our prototype, we specifically designed
              our process and part selection around these considerations to make
              this a machine that could be used in almost any environment.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Goals;
