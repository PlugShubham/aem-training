package apps.training.components.structure.rootpage;

import com.adobe.cq.sightly.WCMUsePojo;

public class Logic extends WCMUsePojo{
    private String message;
    
    @Override
    public void activate() throws Exception{
        String input1= get("value1",String.class);
        message="Welcome to "+input1+" Training School";
    }
    
    public String getMessage(){
       return message;
    }
}