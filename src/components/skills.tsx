import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Skills() {
    const skillsset = [
        { skill: "HTML5", Profiency: 80 },
        { skill: "CSS3", Profiency: 80 },
        { skill: "JavaScript", Profiency: 70 },
        { skill: "Angular", Profiency: 75 },
        { skill: "jQuery", Profiency: 70 },
        { skill: "React", Profiency: 70 },
        { skill: "Angular Material", Profiency: 80 },
        { skill: "Material UI", Profiency: 70 },
        { skill: "Bootstrap", Profiency: 90 },
        { skill: "Tailwind CSS", Profiency: 70 },
        { skill: "SCSS", Profiency: 80 },
        { skill: "Git", Profiency: 70 },
    ];

    const skillset = skillsset.map((x) => (
        <div key={x.skill}>
             <Box key={x.skill} sx={{ mb: 2 }} className="row">
                    <div className="col-md-5 offset-1">
                    <Typography variant="h6" gutterBottom>
                        {x.skill}
                    </Typography>
                    </div>
                    <div className="col-md-5">
                    <LinearProgress
                        variant="determinate"
                        value={x.Profiency}
                        sx={{ height: 10, borderRadius: 5 }}
                    />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {x.Profiency}%
                    </Typography>
                    </div>
                </Box>
        </div>
    ));

    return (
        <div className="skills-container">
            <h2 className='text-purple-800 text-center mb-10'>My Skills</h2>
            {skillset}
        </div>
    );
}

export default Skills;
