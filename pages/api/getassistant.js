import OpenAI from 'openai';
const fs = require('fs');
import path from 'path';
export default function handler(req, res) {
    const openai = new OpenAI({apiKey:process.env.OPENAI_KEY});
    const message = async ()=>{
        try{
         
            const query = req.query.query;
            
            
        let assistant_id = process.env.ASSISTANT_ID;
        let info = `
         2. Genesis of the Organization
2.1 History and Background
ABHILASHA SAMITI is a voluntary organization established informally in year
2007-2008 and formally 2019-2020, Organization under Indian Societies Registration Act
21, of 1860. ABHILASHA SAMITI’s level of action is National, recently working in rural and
urban areas of Pithoragarh district and also in other district of Uttarakhand (like
Champawat, Almora, Bageswar etc). The organization specially works on improve livelihood
status of rural population, social work, Biodiversity, human trafficking, Human Resource
Management, Health Awareness, Women Empowerment, Culture, Gender and also Conduct
Public Awareness Campaigns for Right to education, Providing employment oriented
training for Self Help Group and creating groups.
2.2 Organizational Belief
The organization has similar beliefs to those for which it was initially founded. This include
issues related to –
 Biodiversity,
 Public Awareness Program on Human Trafficking,
 Public Awareness Program for Animals Bird Conversation,
 Public Awareness Program about Right to Education,
 Employment Testing Training for SHG & Forming SHG group,
 Promoting Yoga Education With Health Awareness Testing Program,
 Promoting of Tourism And Pilgrimage in Uttarakhand & other states of India,
 Employment Testing Training in Tourism Sector,
 Promotion of Education & Operation of Education Institution,
 And also Women’s right, Empowerment, Fundamentalism, Injustice, Livelihoods etc.
 Celebration of Birth/Death Anniversary of National Saints.
ABHILASHA SAMITI
ORGANIZATION PROFILE ABHILASHA SAMITI, PITHORAGARH
4
3. Abhilsha Samiti’s Strategy
3.1 Vision:
We are working for our motto “A small step can change lots of life” in India. The main mission
of the Society is to promote education, health-care services and give harmony, prosperity and
happiness in family life of backward & poor families. To provide help & support to the children,
widows, sick person, old aged helpless and indignant persons are the target people of our
Society.
3.2 Mission:
Organization have focused its activities in Uttarakhand Himalayas, mainly in the remote areas
of district Pithoragarh of Uttarakhand, Where a programme implementation office is
established and a devotee team of voluntaries is working. Organization is running a school in
remote villages, where education facilities are not enough and rural people are migrating for
education towards district head quarter and other where. Organization have selected two
major clusters for development within the district which includes 50 villages and implementing
different developmental activities.
3.3 Capacity and experience:
Although organization has been registered recently in 2020, because of its working in unofficial
shape for a long time it has developed a big team of trained and experienced workers. The
number of rural development workers/resource persons is 18; training staff in different Project
is 07. Thus, total number of workers is 25.
3.4 Values and Principles
ABHILASHA SAMITI encourage the following values to be practiced both at individual and
organizational level.
• Honesty
•Transparency and Accountability
• Mutual respect
• Cost efficiency
• Creativity
• Gender sensitiveness
• Participation
• Solidarity
ABHILASHA SAMITI
ORGANIZATION PROFILE ABHILASHA SAMITI, PITHORAGARH
5
3.5 Programs For the past years we have been working in field of:
• Child Education
• Biodiversity, Environmental Conservation
• Composite Management Plane in District Pithoragarh
 Capacity Buildup Program for Panchyat Mambers
 Orientation Program PMKSY-2.0
 Spring Shed Management Training Program (PMKSY-2.0)
 Accounting Training Program (PMKSY-2.0)
 Celebration of Birth/Death Anniversary of National Saints.
• Formation of SHGs and their trainings
• Sustainable Development
• Rural Development
• Health, Child and Women development
• Research program in social work
• Environment protection and Agriculture development
         
        `
         
          let thread = await openai.beta.threads.create();
          const message = await openai.beta.threads.messages.create(
            thread.id,
            {
            role: "user",
            content: query,
           
            
            }
        );
        console.log(message);



    const run = openai.beta.threads.runs.stream(thread.id, {
        assistant_id: assistant_id,
        instructions:`You are a helpful assistant for a non-profit organization named Abhilasha Samiti and your name is WebSeva and you are created by Abhishek Kholiya. use the information provided to answer the questions. ${info} and only answer in maximum 2 lines`,
       model: "gpt-4o",

      })
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      run
        .on('textCreated', (text) => {
          res.write(`data: ${JSON.stringify({ type: 'textCreated', text })}\n\n`);
        })
        .on('textDelta', (textDelta) => {
          res.write(`data: ${JSON.stringify({ type: 'textDelta', textDelta })}\n\n`);
        })
        .on('toolCallCreated', (toolCall) => {
          res.write(`data: ${JSON.stringify({ type: 'toolCallCreated', toolCall })}\n\n`);
        })
        .on('toolCallDelta', (toolCallDelta) => {
          res.write(`data: ${JSON.stringify({ type: 'toolCallDelta', toolCallDelta })}\n\n`);
        })
        .on('end', () => {
          res.write('data: [DONE]\n\n');
          res.end();
        })
        .on('error', (error) => {
          console.error('Error:', error);
          res.write('data: [ERROR]\n\n');
          res.end();
        });
      
                
        }catch(error){
            console.error('Message Error',error);
            res.status(500).json({ error: 'An error occurred while processing your request.' });

        }
       
    }
    message();
  }
  