export interface CaseStudy {
  id: string;
  name: string;
  subtitle: string;
  logoUrl: string;
  overallGoal: string;
  results: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "carmody-quality-solutions",
    name: "Carmody Quality Solutions",
    subtitle: "Creating a Pharmaceutical Quality Thought Leader.",
    logoUrl: "/src/public/CQS.svg",
    overallGoal: "Help a pharmaceutical quality consultancy grow awareness, gain traction, and build thought leadership.",
    results: "• Social media program (LinkedIn posts) led to regular, ongoing contributed articles in Clinical Leader, Life Science Leader, and Pharmaceutical Online.\n• Regular articles also led to ongoing speaking engagements as well as new business contacts.\n• Created website as well as an eBook to capture the approach and use to create additional engagement and unique position in the space."
  },
  {
    id: "zoll",
    name: "ZOLL",
    subtitle: "A Manufacturer of Cardiac Resuscitation and Data Management Products Used Worldwide.",
    logoUrl: "/src/public/Zoll.png",
    overallGoal: "Establish marketing partnerships with high-profile customers to provide value and help the sales force foster relationships.",
    results: "• Developed a high-profile \"Cardiac Arrest Survivor Event\" with the Ottawa Paramedic Service (OPS) to celebrate cardiac arrest saves and show appreciation to OPS members and the community.\n• Worked with the Chief and other senior-level members and local media to ensure a well-attended and publicized event.\n• Significant coverage of the event included A | Channel in Ottawa; Le Téléjournal, Radio-Canada's evening television newscast; CTV News; and Rogers TV.\n• Created \"starter press kits\" for the sale force to easily share with customers to obtain media coverage in local markets.\n• Tailored for three different divisions, the kit helped to garner over 370 press clippings and 200 television stories from the program's inception.\n• Results equip sales force with support materials to help raise awareness and influence the sales process."
  },
  {
    id: "radisphere",
    name: "Radisphere",
    subtitle: "A National Radiology Group Practice.",
    logoUrl: "/src/public/radisphere.jpeg",
    overallGoal: "Develop the \"human face\" of radiology and Radisphere at local client hospitals.",
    results: "• Conceived and developed the \"Radiologist Spotlight\" series profiling onsite radiologists in order to get them engaged and build awareness and relationships with hospital medical staffs.\n• Developed template materials to increase awareness of radiology services.\n• This included byline article, newsletter and other templates for hospital marketers to quickly use leverage in existing communications channels."
  },
  {
    id: "en-pro",
    name: "En-Pro",
    subtitle: "A Global Provider of AED (Automated External Defibrillators) Training and Maintenance Programs.",
    logoUrl: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    overallGoal: "Developed website content to update messaging and positioning to educate about the need for AED programs.",
    results: "• Satisfaction with messaging and content led client to hire RAMHC to develop the Company's first formal corporate brochure, building on messaging and positioning work done for website."
  }
];